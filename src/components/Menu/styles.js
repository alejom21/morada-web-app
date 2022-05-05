import styled from 'styled-components';

export const MenuWrapper = styled.div`
    border-top: 2px solid #ccc;
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    display: flex;
    //justify-content: space-between;
    a {
        flex: 1;
        text-decoration: none;
        
    }
`;

export const MenuItemWrapper = styled.section`
    
    border-left: 1px solid #ccc;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg{
        color: #4A148C;
        font: 1.3em;
    }

    p{
        margin: 5px auto;
    }
    &:hover{
        background-color: #4A148C;
        svg{ color: #fff;}
        p{ color: #fff;}
    }
`;