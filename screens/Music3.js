import React, { useState } from 'react';
import { Slider, View} from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronIcon } from '../components/icons/Chevron';
import { MoreVertIcon } from '../components/icons/MoreVert';
import { PlayIcon } from '../components/icons/Play';
import Blonded from '../assets/313x0w.jpg'

const Background = ({ children }) => {
  return (
    <LinearGradient
        colors={['#464769','#1B1A1F']}
        style={{
        flex: 1,
        paddingTop: 15,
        }}>
          {children}
    </LinearGradient>
  );
}

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
   padding-top: 15px;
  /*background-color: red;*/
`;
TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
   padding-top: 15px;
  align-items: flex-end;
  /*background-color: green;*/
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
  padding-top: 15px;
 /*background-color: yellow;/*
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;
TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

// =====================

const ScreenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;

const CoverArea = styled.View`
  flex: 4; 
  background: transparent;
`;

CoverArea.Image = styled.Image`
  width: 100%;
  flex: 1;
`;

const PlayerArea = styled.View`
  flex: 2; 
  justify-content: flex-end;
  background: transparent;
`;

PlayerArea.Title = styled.Text`
  color: white;
  font-size: 24px;
  background: transparent;
`;

PlayerArea.Author = styled.Text`
  color: #BBBBBB;
  font-size: 16px;
  background: transparent;
`;

const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: transparent;
`;

Controls.Play = styled.TouchableOpacity`
`;

Controls.Slider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

Controls.Slider.CurrentTime = styled.Text`
  color: #bbbbbb;
`;

Controls.Slider.TotalTime = styled.Text`
  color: #bbbbbb;
`;

const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;

export function PlayerScreen() {
   const [segundos, setSegundos] = useState(0);

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Background>
    <TopBar>
      <TopBar.Left>
        <ChevronIcon />
      </TopBar.Left>
        
      <TopBar.Middle>
        <TopBar.Title>
          Tocando do artista
        </TopBar.Title>
        <TopBar.SubTitle>
          Frank Ocean
        </TopBar.SubTitle>
      </TopBar.Middle>

    <TopBar.Right>
      <MoreVertIcon />
    </TopBar.Right>
    </TopBar>
<ScreenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode="contain"
            source={Blonded}
          />
        </CoverArea>

        <PlayerArea>
          <PlayerArea.Title>
            Seigfried
          </PlayerArea.Title>
          <PlayerArea.Author>
          Frank Ocean
          </PlayerArea.Author>

          <Controls>
            <Controls.Slider>
              <AudioSlider
              thumbTintColor="#FFFFFF"
                minimumTrackTintColor="#b8cad4"
                maximumTrackTintColor="#777777"
                minimumValue={0}
                maximumValue={184}
                value={segundos}
                onValueChange={(value) => {
                  setSegundos(value);                  
                }}
              />
              <Controls.Slider.CurrentTime>
                {formatTime(segundos)}
              </Controls.Slider.CurrentTime>
              <Controls.Slider.TotalTime>
                5:34
              </Controls.Slider.TotalTime>
            </Controls.Slider>
                                
            <Controls.Play>
              <PlayIcon
                width={88}
                height={88}
              />
            </Controls.Play>
          </Controls>
        </PlayerArea>
      </ScreenArea>
   </Background>
  );
}