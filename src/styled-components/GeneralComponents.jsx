import styled from "styled-components";

export const SectionHolder = styled.section`
  display: flex;
  max-width: 1024px;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
  }
`;

export const CountriesSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  padding: 90px 0;

  #top-section {
    display: flex;
    width: 100%;
    justify-content: space-between;

    h3 {
      font-size: 24px;
      font-weight: 600;
    }
  }

  @media (min-width: 768px) {
  }
`;
