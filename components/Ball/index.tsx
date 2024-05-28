import { View, Image } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}

export function Ball({ posY }: Props) {
  return (
    <View style={[styles.logo, {bottom: posY}]}>
      <Image source={require('../../assets/icons8-bird-60.png')} />
    </View>
  )
}