import styled from 'styled-components'
import { ipad, large, mobile } from '../../../../styles/screens'
import { noSelect } from '../../../../styles/mixins/noSelect'
import { fontWeight } from '../../../../styles/mixins/fontWeight'

export const ServicesHtmlCardContentTitle = styled.h1`
  @media (max-width: ${mobile}) {
    font-size: 1rem;
  }

  font-size: 1.3rem;
  font-family: var(--inter-font);
  color: var(--oxford-blue);
  font-weight: 400;
  position: relative;
  margin: 0;
  margin-bottom: 0.4rem;
  transition: var(--transition);
  cursor: pointer;
  display: flex;
  align-items: center;

  ${noSelect()}

  ${fontWeight('var(--powder-blue)')}

  :hover {
    text-decoration: underline;
  }
`

export const LinkReference = styled.a`
  @media (max-width: ${mobile}) {
    font-size: 0.8rem;
  }

  font-size: 1rem;
  text-decoration: none;
  color: var(--dark-gray);
  font-family: var(--inter-font);
  font-weight: 300;
  text-align: right;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  i {
    margin-right: 0.3rem;
    transition: var(--transition);
  }

  &:hover {
    span {
      text-decoration: underline;
    }

    i {
      text-decoration: none;
      margin-right: 0.5rem;
    }
  }
`
export const ServicesHtmlCardIcon = styled.span`
  @media (max-width: ${mobile}) {
    padding: 0.7rem 0.4rem;
    font-size: 1.3rem;
  }

  border-radius: var(--radius);
  box-shadow: 0.3px 0.3px 4px var(--shadow-color);
  transition: var(--transition);
  text-align: center;
  height: auto;
  width: 60px;
  padding: 0.8rem;
  font-size: 1.9rem;

  i {
    cursor: pointer;
  }
`

export const ServicesHtmlCard: any = styled.div`
  align-items: center;
  border-radius: var(--radius);
  border: 0.5px solid rgba(0, 0, 0, 0);
  box-shadow: ${(props: any) =>
    props.showText ? '0.5px 0.5px 2px var(--oxford-dark-blue)' : ''};
  color: var(--dark-gray);
  display: flex;
  height: auto;
  margin: 0 auto;
  padding: 1rem;
  transition: var(--transition);
  width: 300px;

  @media (max-width: ${mobile}) {
    margin: 0;
    padding: 1rem 0.5rem;
  }

  @media (min-width: ${mobile}) {
    width: 340px;
  }

  @media (min-width: ${ipad}) {
    width: 420px;
  }

  @media (min-width: ${large}) {
    width: auto;
    margin: 0;
  }

  &:hover {
    border: 0.5px solid var(--oxford-dark-blue);
    box-shadow: 0.6px 0.6px 5px var(--shadow-color);

    background: var(--oxford-dark-blue);
    color: var(--powder-blue);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c2b0de' fill-opacity='0.03'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    ${ServicesHtmlCardContentTitle} {
      color: var(--powder-blue);
    }

    ${LinkReference} {
      color: var(--green);
    }

    ${ServicesHtmlCardIcon} {
      transform: scale(1.08);
      background: var(--independence);
      color: var(--gainsboro);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23ffffff' fill-opacity='0.07'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  }
`

export const ServicesHtmlCardContent = styled.div`
  margin-left: 1rem;
`

export const ServicesHtmlCardContentText = styled.p`
  @media (max-width: ${mobile}) {
    font-size: 0.8rem;
  }

  font-family: var(--open-sans-font);
  line-height: 1.55;
  letter-spacing: 0.5px;
  position: relative;
  font-size: 0.9rem;

  &:hover {
    color: var(--cultured);
  }
`

export const ServicesHtmlCardContentContainer: any = styled.div`
  visibility: ${(props: any) => (props.isShow ? 'visible' : 'hidden')};
  display: ${(props: any) => (props.isShow ? 'block' : 'none')};
  position: ${(props: any) => (props.isShow ? 'relative' : 'absolute')};
  transform: ${(props: any) => (props.isShow ? 'translateY(0)' : '')};
  transition: var(--transition);
`

export const ServicesHtmlCardContentTitleIcon: any = styled.span`
  cursor: pointer;
  ${noSelect()};

  i {
    height: auto;
    padding: 0;
    width: auto;
    background-color: none;
    box-shadow: none;
    transform: ${(props: any) => (props.toVolt ? 'rotate(90deg)' : 'rotate(0deg)')};
    transition: var(--transition);
    margin-right: 0.5rem;

    ${noSelect()}
  }
`
