import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Table,Button,Popconfirm} from 'antd';
import {getBanner,removeBanner,removeAllBanner} from '../../api/banner'

function BannerList() {
    const history = useHistory();
    const [data,setData]=useState([])
    const [selectedArr,setSelectedArr]=useState([])
    const [flag,setFlag] = useState(false)
    const [total,setTotal] = useState()
    useEffect(()=>{
        getBanner().then(res=>{
            setData(res.data.data)
            setTotal(res.data.data.length)
        })
    },[])
    const cancel=()=>{

    }
    const confirm = (bannerid)=>{
        return ()=>{
            removeBanner({bannerid}).then(res=>{
                if(res.data.code===200){
                    getBanner().then(res=>{
                        setData(res.data.data)
                        setTotal(res.data.data.length)
                    })
                }
            })
        }
    }
    const onSelectChange = selectedRowKeys => {
        selectedRowKeys.length>0?setFlag(true):setFlag(false)
        setSelectedArr(selectedRowKeys)
    }
    const rowSelection = {
        onChange: onSelectChange,
    }
    const clickHandler = ()=>{
       history.push('/bannermanager/addimg')
    }
    const onDeleteMany = (selectedArr)=>{
        return ()=>{
            removeAllBanner({deleteArr:selectedArr}).then(res=>{
                if(res.data.code===200){
                    rowSelection.selectedRowKeys=[]
                    getBanner().then(res=>{
                        setData(res.data.data)
                        setTotal(res.data.data.length)
                        setFlag(false)
                    })
                }
            })
        }
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
            render:(text,record,index)=>
            <Popconfirm
            title="你确定要删除吗"
            onConfirm={confirm(record.bannerid)}
            onCancel={cancel}
            okText="确定"
            cancelText="取消"
            >
                <span style={{cursor:'pointer'}}>删除</span>
            </Popconfirm>,
        }
    ]
    
    return (
        <>
            <Button 
            type="primary"
            onClick={clickHandler}
            >添加轮播图</Button>
            {flag?
            <Button 
            type='primary'
            onClick={onDeleteMany(selectedArr)}
            >批量删除</Button>:''
            }
            <Table 
            size='small'
            bordered
            pagination={{
                position:['bottomLeft'],
                total:total,
                pageSizeOptions:['5','10','20'],
                showTotal:(total,range)=>`共有${total}条数据`,
                showSizeChanger:true,
            }}
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
