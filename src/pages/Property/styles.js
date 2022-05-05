import styled from 'styled-components';

export const PropertyContainer = styled.section`
    margin-top: 20px;
    text-align: center;
`;

export const Image2Wrapper = styled.div`
    flex: 30;
    border-radius: 20px;
    img{
        border-radius: inherit;
        width: 80%;
    }
`;

export const PropertyInfo2Wrapper =styled.div`
    flex: 70;
    margin-left: 10px;
    
    h3{
        margin: 0;
    }
`;

export const PropertyBusinessType2 =styled.div`
    margin-left: 47%;
    display: flex;
    align-items: center;
    svg{
        color: #ccc;
        font-size: 1.1em;
    }
    p{
        margin: 0;
        color: #444;
        font-weight: 300;
        margin-left: 5px;
    }
`

export const PrecioType2 =styled.div`
    margin-left: 47%;
    display: flex;
    align-items: center;
    b{
        color: blue;
        font-size: 18px;
    }
    svg{
        color: blue;
        font-size: 1.1em;
        margin-right: 5px;
    }
`

export const detalleWrapper =styled.div`
    margin: 10px;
`