import styled from 'styled-components';
import { colors, devices } from './helpers';
import BackgroundDesktop from './assets/pattern-background-desktop.svg';
import BackgroundMobile from './assets/pattern-background-mobile.svg';

export const Wrapper = styled.div`
  text-align: center;
  font-family: 'Red Hat Display', sans-serif;
  background-image: url(${BackgroundMobile});
  background-color: ${colors.Zumthor};
  background-repeat: no-repeat;
  background-position: top;
  background-size: 150%;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  @media ${devices.notMobile} {
    background-image: url(${BackgroundDesktop});
  }
`;

export const CardWithIconWrapper = styled.div`
  background-color: ${colors.White};
  margin: 5em auto;
  width: 90%;
  height: 700px;
  border-radius: 30px;
  overflow: hidden;
  @media ${devices.notMobile} {
    margin: 9em auto;
    width: 450px;
    height: 700px;
  }
`;

export const CardContent = styled.form`
  padding: 0 20px;
  @media ${devices.notMobile} {
    padding: 0 50px;
  }
`;

export const CardTitle = styled.h1`
  font-weight: 900;
  padding-top: 10px;
  color: ${colors.CloudBurst};
`;

export const Text = styled.div`
  &.option-title {
    font-weight: 700;
    color: ${colors.CloudBurst};
  }
  &.card-content, &.option-price {
    color: ${colors.BermudaGray};
    line-height: 1.5;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  background: ${colors.Zircon};
`;

export const OptionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  justify-content: space-evenly;
  width: 7em;
  @media ${devices.notMobile} {
    width: 150px;
  }
`;

export const Link = styled.a`
  font-weight: 700;
  &:hover {
    opacity: 80%;
    text-decoration: none;
    color: ${colors.CornflowerBlue}
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0;
`;

export const Button = styled.button`
  cursor: pointer;
  font-weight: 700;
  height: 50px;
  width: 100%;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  letter-spacing: 1px;
  background: ${props => props.type === 'submit' ? colors.PersianBlue : 'transparent'};
  color: ${props => props.type === 'submit' ? colors.White : colors.BermudaGray};
  box-shadow: ${props => props.type === 'submit' ? `0px 15px 15px ${colors.Zumthor}` : 'default'};
  &:hover {
    background: ${props => props.type === 'submit' ? colors.CornflowerBlue : 'transparent'};
    color: ${props => props.type === 'submit' ? colors.White : colors.CloudBurst};
    box-shadow: ${props => props.type === 'submit' ? '0px 15px 15px #766cf175' : 'default'};
  }
`;

export const Attribution = styled.div`
  font-size: 11px;
  a {
    color: ${colors.SanMarino};
  }
`;
