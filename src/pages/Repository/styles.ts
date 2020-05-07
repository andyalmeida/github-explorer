import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    font-weight: bold;
    line-height: 19px;
    margin-left: 12px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #666;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  width: 100%;

  header {
    display: flex;
    align-items: center;

    img {
      width: 125px;
      height: 125px;
      border-radius: 50%;
      margin-right: 30px;
    }

    strong {
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      color: #3d3d4d;
    }

    p {
      font-size: 20px;
      line-height: 23px;
      color: #737380;
      margin-top: 12px;
    }
  }

  ul {
    margin-top: 38px;
    list-style: none;
    display: flex;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        color: #3d3d4d;
      }

      span {
        display: block;
        font-size: 20px;
        line-height: 23px;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 25px 30px 25px 25px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      flex: 1;

      strong {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        line-height: 21px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
