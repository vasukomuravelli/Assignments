import React from 'react';
import { Pagination } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { Input,Button,Empty } from 'antd';

import { getUserList } from "../redux/Github/actions";

export const Dashboard = () => {
    const query = React.useRef({current : ""});
    const dispatch = useDispatch();
    const { data } = useSelector((state) => ({ data: state.githubState.data }));
        
    const handleSearch = () => {
        dispatch(getUserList(query.current.state.value,1,6));        
    }
    const handlePageChange = (page,pageSize) => {
        dispatch(getUserList(query.current.state.value, page, pageSize));
    }
    console.log(data);
    return (
        <div >
            <div style={{ width: "50%", margin: "auto" }}>
                <h1>Search Github Profiles</h1>
                <Input type="text" placeholder="Github profiles" ref={query} /><br/><br/>
                <Button onClick={handleSearch}>Search</Button>
            </div>
            <div style={{display: 'grid',gridTemplateColumns : "repeat(3,30%)",margin : "30px auto auto 80px",}}>
                {data?.items ?  data.items.map((e) => {
                    return (
                        <div key={e.id} >
                            <a href={e.html_url} target="_blank" rel="noreferrer" >
                                <div><img src={e.avatar_url} alt="userimg" style={{width : "400px",height : "400px",borderRadius:"20px"}}></img></div>
                                <div>
                                    <h3>{e.login}</h3>
                                </div>
                            </a>
                        </div>
                    ) 
                }) : <div style={{marginLeft : "134%",width : "max-content"}}><Empty /></div>}
            </div>
            <div style={{textAlign: "center",paddingTop: "20px", paddingBottom: "40px"}} >
               {data?.items ? <Pagination  defaultCurrent={1} total={data.total_count} defaultPageSize={6} pageSize={6} onChange={handlePageChange}/>:null}
            </div>
        </div>
    )
}