import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4.5rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

    strong {
      display: block;
      font-size: 2rem;
      margin-top:1rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`

interface TotalCardProps {
  isNegative: boolean;
}

export const TotalCard = styled.div<TotalCardProps>`
  background: ${(props) => props.isNegative ? '#E52E4D' : '#33CC95'} !important;
  color: #fff !important;
`