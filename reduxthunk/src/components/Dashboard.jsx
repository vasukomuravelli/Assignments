import React from 'react';
import { Pagination } from 'antd';
import { useSelector, useDispatch } from "react-redux";

import { getUser } from "../redux/Github/actions";

export const Dashboard = () => {
    const query = React.useRef({current : ""});
    const dispatch = useDispatch();
    const { data } = useSelector((state) => ({ data: state.githubState.data }));

    
    const getUserList = (query, page, page_size) => {
        console.log("getuser",query);
        fetch(
          `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${page_size}`
          )
          .then((e) => e.json())
          .then((e) => dispatch(getUser(e)));
        };
        
        const handleSearch = () => {
            getUserList(query.current.value,1,6);        
        }
    const handlePageChange = (page,pageSize) => {
        console.log(page, pageSize);
        getUserList(query.current, page, pageSize);
    }
    console.log(data);
    return (
        <div>
            <div>
                <input type="text" placeholder="Github profiles" ref={query} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div style={{display: 'grid',gridTemplateColumns : "repeat(3,30%)",margin : "30px auto",}}>
                {data?.items ?  data.items.map((e) => {
                    return (
                        <div key={e.id} >
                            <a href={e.html_url} target="_blank" rel="noreferrer" >
                                <div><img src={e.avatar_url} alt="userimg" style={{width : "300px",height : "300px"}}></img></div>
                                <div>
                                    <h3>{e.login}</h3>
                                </div>
                            </a>
                        </div>
                    ) 
                }): <div>No data</div>}
            </div>
            <div style={{textAlign: "center",paddingTop: "20px", paddingBottom: "40px"}} >
               {data?.items ? <Pagination  defaultCurrent={1} total={data.total_count} defaultPageSize={6} pageSize={6} onChange={handlePageChange}/>:null}
            </div>
        </div>
    )
}