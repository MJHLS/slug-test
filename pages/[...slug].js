import React from "react";


const Page404 = (props) => {
    let targeting = {
        content_placement: [],
        document_url: []
    }

    return (
        <>
          asPath: {props.asPath}
        </>
      )
}

Page404.getInitialProps = async({res, asPath}) => {
    //await global_redirect(res, asPath)
    console.log('asPath:', asPath)
    
    return { asPath }
}

export default Page404