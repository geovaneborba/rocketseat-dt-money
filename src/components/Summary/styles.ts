import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media ((min-width: 320px) and (max-width: 640px)) {
    display: flex;
    flex-wrap: wrap;
  }

  @media ((min-width: 640px) and (max-width: 768px)) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${(props) => props.theme['green-700']};
    `}

  @media ((min-width: 320px) and (max-width: 640px)) {
    width: 100%;
  }

  @media ((min-width: 640px) and (max-width: 768px)) {
    &:last-child {
      grid-column: span 2;
    }
  }
`
