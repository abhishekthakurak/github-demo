import { Global } from '@emotion/core'

const global = `
    body {
        margin: 0;
        padding: 0;
    }
`

export const Core = () => (<Global styles={global} />)