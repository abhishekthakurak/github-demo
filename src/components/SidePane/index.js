import { useSelector } from 'react-redux'
import { 
    wrapStyle,
    profilePicStyle,
    nameStyle,
    userNameStyle,
    followBtnStyle,
    bioStyle,
    blockTextStyle,
    locationStyle,
    companyStyle
 }  from './style'

export default () => {

   const { data: userData }= useSelector(( { profile: { data } })=>({ data }))
   const { avatar_url : avatar, 
    login: userName, name, bio, company, location,
    email } = userData ||{}

    return(
    <div css={wrapStyle}>
        <img css={profilePicStyle} src={avatar}/>
        <div css={nameStyle}>{name}</div>
        <div css={userNameStyle}>{userName}</div>
        <button css={followBtnStyle}>Follow</button>
        <div css={blockTextStyle}>Block or report user</div>
        <div css={bioStyle}>{bio}</div>
        <div css={companyStyle}>{company}</div>
        <div css={locationStyle}>{location}</div>
    </div>
    )
}