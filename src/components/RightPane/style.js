import { css } from '@emotion/core'

export const wrapStyle = css`
    padding: 16px 24px 0px 32px;
    display: flex;
    margin: 48px 8px 0;
    flex-direction: column;
`

export const tabStyle = (selectedTab)=>css`
    min-width: 60px;
    display: flex;
    margin: 12px;
    align-items: center;
    justify-content: center;
    height: 30px;
    ${selectedTab && 'border-bottom: 2px solid orange'};
`

export const tabNameStyle = css`
    padding: 12px;
`

export const countStyle = css`
    width: 20px;
    height: 20px;
    padding: 4px;
    background: #eee;
    border-radius: 50%;    
    align-items: center;
    justify-content: center;
    display: flex;
`

export const tabsWrap = css`
    display: flex;
`

export const itemStyle = css`
    padding: 16px;
    border-bottom: 1px solid #eee;
`