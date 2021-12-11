import styled from "styled-components";

export const Container = styled.form`
  table {
    color: var(--text-title);
    font-size: 1.2rem;
    margin-left: 8%;
    margin-top: 8%;
  }



  tr {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--green);
    font-size: 1rem;
  }



  th{
    width: 10%;
    background: var(--red);
    font-size: 1rem;
    border-radius: 0.25rem;
  }

  td {
    text-align: center;
  }


  button {
    height: 2rem;
    margin-top: 1rem;
    background: var(--tex-tile);
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }


  #btn{
    padding: 2%;
    margin-left: 10%;
    margin-right: 4%;
  }

  #likeBtn{
    padding: 2%;
    margin-left: 4%;
    margin-right: 4%;
  }

  #deslikeBtn{
    padding: 2%;
    margin-left: 4%;
    margin-right: 4%;
  }

`;

