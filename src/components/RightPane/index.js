import { useState } from 'react'
import { useSelector } from 'react-redux'
import { 
    wrapStyle,
    tabStyle,
    tabNameStyle,
    countStyle,
    tabsWrap,
    itemStyle
 }  from './style'
import { useEffect } from 'react'

 const tabs= [
{
     name: 'Overview',
 },
 {
    name: 'Repositories',
},
{
    name: 'Project',
    count: 1
},
{
    name: 'Starts',
    count: 7
},
{
    name: 'Followers',
    count: 6
},
{
    name: 'Following',
    count: 6
}]

export default () => {
    const [selectedTab, setSelectedTab] = useState('Repositories')
    const { data: repos = [] }= useSelector(( { repos: { data } })=>({ data }))

    console.log('repos', repos)
    useEffect(() => {
        setSelectedTab('Repositories')
    }, [])


    return(
    <div css={wrapStyle}>
        <div css={tabsWrap}>
            {tabs.map(({name, count})=> (
                <div css={tabStyle(selectedTab===name)}>
                    <div css={tabNameStyle}>{name}</div>
                    {(count || count===0) && <div css={countStyle}>{count}</div>}
                </div>
            ))}
        </div>
       
        <div>
        {repos.map(({name, description, updated_at})=>(
            <div key={name} css={itemStyle}>
                <div>{name}</div>
            <div>{description}</div>
            <div>{updated_at}</div>
            </div>
        ))}
        </div>
    </div>
    )
}