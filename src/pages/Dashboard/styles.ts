import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  line-height: 56px;
  color: #3a3a3a;
  margin-top: 100px;
  max-width: 450px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 715px;

  display: flex;

  input {
    flex: 1;
    height: 72px;
    padding: 0 29px;
    border: 0;
    border-radius: 5px 0 0 5px;
    font-size: 20px;
    line-height: 23px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 72px;
    background: #04d361;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 120px;
  max-width: 715px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 14px 30px 14px 14px;
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

    img {
      width: 84px;
      height: 84px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 24px;

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
