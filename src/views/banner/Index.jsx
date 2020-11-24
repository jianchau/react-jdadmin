import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Table,Button,Popconfirm} from 'antd';

import {getBanner} from '../../api/banner'
function BannerList() {
    const [data,setData]=useState([])
    const [selectedRowKeys,setSelectedRowKeys]=useState({})
    useEffect(()=>{
        getBanner().then(res=>{
            setData(res.data.data)
        })
    },[])
    const cancel=()=>{

    }
    const confirm = ()=>{
        console.log(111)
    }
    const columns = [
        {
            align:'center',
            width:100,
            title: '序号',
            key: 'name',
            render: (text,record,index) => <span>{index+1}</span>
        },
        {
            align:'center',
            width:300,
            title: '轮播图',
            dataIndex: 'bannerimg',
            key: 'age',
            render:(text,record,index)=>(<img src={text} alt="" width="60px" height='60px' />)
        },
        {
            align:'center',
            width:200,
            title: '链接地址',
            dataIndex: 'link',
            key: 'address',
        },
        {
            align:'center',
            width:100,
            title:'操作',
            key:'operation',
            render:()=>
                <Popconfirm
                title="你确定要删除吗"
                onConfirm={confirm}
                onCancel={cancel}
                okText="确定"
                cancelText="取消"
                >
                    <span style={{cursor:'pointer'}}>删除</span>
                </Popconfirm>,
        }
    ]
    const onSelectChange = selectedRowKeys => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        // setSelectedRowKeys({ selectedRowKeys });
    }
    const rowSelection = {
        // selectedRowKeys,
        // onChange: onSelectChange,
    }

    const history = useHistory();
    const clickHandler = ()=>{
       history.push('/bannermanager/addimg')
    }
    return (
        <>
            <Button 
            type="primary"
            onClick={clickHandler}
            >添加轮播图</Button>
            <Table 
            size='small'
            bordered
            scroll={{y:350}}
            columns={columns} 
            dataSource={data} 
            rowKey={record=>record.bannerid} 
            rowSelection={rowSelection}

            />
        </>
    )
}

export default BannerList
