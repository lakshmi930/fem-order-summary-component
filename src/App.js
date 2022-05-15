import { HeroIllustration, MusicIcon } from './assets';
import { 
  Button,
  ButtonWrapper, 
  CardContent, 
  CardTitle, 
  CardWithIconWrapper, 
  Link, 
  OptionContainer, 
  OptionTextWrapper, 
  Text,
  Wrapper
} from './AppStyled.styled';

function App() {
  return (
    <Wrapper>
      <CardWithIconWrapper>
        <HeroIllustration />
        <CardContent>
          <CardTitle role="heading">
            Order Summary
          </CardTitle>
          <Text className="card-content" role="complimentary" >
            You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!
          </Text>
          <OptionContainer>
            <MusicIcon />
            <OptionTextWrapper>
              <Text className="option-title" role="mark" aria-details="annual-charge" >
                Annual Plan
              </Text>
              <Text className="option-price" role="comment" id="annual-charge" >
                $59.99/year
              </Text>
            </OptionTextWrapper>
            <Link href="#">
              Change
            </Link>
          </OptionContainer>
          <ButtonWrapper>
            <Button type="submit">Proceed to Payment</Button>
            <Button type="reset" onclick="window.history.back();">Cancel Order</Button>
          </ButtonWrapper>
        </CardContent>
      </CardWithIconWrapper>
      {/* <Attribution>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/lakshmi930" rel="author">Lakshmi N</a>.
      </Attribution> */}
    </Wrapper>
  );
}

export default App;
