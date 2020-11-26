import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { connect} from 'react-redux'
import { Tag,Tooltip} from 'antd';
import {addCurrentPath} from '../store/actionCreator'
import menu from '../router/menu'

let obj = {}
function getObj(menu){
    menu.forEach(item=>{
       if(!item.children){
            obj[item.path]=item.title
       }
       else{
        obj[item.path]=item.title
        getObj(item.children)
       }
    })
}
getObj(menu)
obj['/']='系统首页'

const  Tags =(props)=> {
    const history = useHistory();
    window.sessionStorage.getItem('tags')&&!window.sessionStorage.getItem('tags').split(',').includes(obj[props.currentPath])&&window.sessionStorage.setItem('tags',[...window.sessionStorage.getItem('tags').split(','),obj[props.currentPath]])
    const arr = window.sessionStorage.getItem('tags')?window.sessionStorage.getItem('tags').split(','):[]
    const [tags,setTags] = useState(arr)
    const [active,setActive] = useState(()=>(window.sessionStorage.getItem('currentPath')?window.sessionStorage.getItem('currentPath'):'系统首页'))
    
    useEffect(async()=>{
        if(!tags.includes(obj[props.currentPath]))
        {
            setTags([...tags,obj[props.currentPath]])  
            window.sessionStorage.setItem('tags',tags)    
            setActive(obj[window.sessionStorage.getItem('currentPath')])
        }
        else{
            setActive(obj[props.currentPath]) 
        }
    },[props.currentPath])

    const handleClose = removedTag => {
        return async()=>{
            const arr = tags.filter(tag => tag !== removedTag);
            await setTags(arr);
            window.sessionStorage.setItem('tags',arr)
            if(removedTag===active){
                props.addCurrentPath( Object.keys(obj).find(item=>obj[item]===arr[arr.length-1]))
                setActive(arr[arr.length-1])
                history.push( Object.keys(obj).find(item=>obj[item]===arr[arr.length-1]))
            }
        }   
    };
    const handleClick = (tag)=>{
        return async ()=>{
            await setActive(tag)
            window.sessionStorage.setItem('currentPath',Object.keys(obj).find(item=>obj[item]===tag))  
            history.push(Object.keys(obj).find(item=>obj[item]===tag))
        }
    }
    
    return (
    <>
        {tags.map((tag, index) => {
            const isLongTag = tag&&tag.length > 20;
            const tagElem = (
                <Tag
                className="edit-tag"
                key={tag}
                color={tag===active?'blue':'gray'}
                onClick={handleClick(tag)}
                closable={index !== 0}
                onClose={handleClose(tag)}
                >
                <span
                    onDoubleClick={e => {
                    if (index !== 0) {
                        this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                        this.editInput.focus();
                        });
                        e.preventDefault();
                    }
                    }}
                >
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </span>
                </Tag>
            );
            return isLongTag ? (
                <Tooltip title={tag} key={tag}>
                {tagElem}
                </Tooltip>
            ) : (
                tagElem
            );
            })}
        </>
    );
}

const mapStateToProps = ()=>({
    currentPath:window.sessionStorage.getItem('currentPath')
})

const mapDispatchToProps = {addCurrentPath}

export default connect(mapStateToProps,mapDispatchToProps)(Tags)