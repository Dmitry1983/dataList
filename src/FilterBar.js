import React from 'react'
import { View, Text, Switch } from 'react-native'
import { styles } from './styles'

export const FilterBar = () => {
	const [isSwitch, setIsSwitch] = React.useState({
		s1: true,
		s2: false,
		s3: false,
	})
	const [state, setState] = React.useState(null)

	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-around',
				marginTop: 16,
				paddingVertical: 16,
				backgroundColor: 'lightgrey',
			}}
		>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ fontSize: 16 }}>View All</Text>
				<Switch
					style={styles.switchBtn}
					onValueChange={() => {
						setIsSwitch({ s1: !isSwitch.s1, s2: false, s3: false })
					}}
					value={isSwitch.s1}
				/>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ fontSize: 16 }}>View True</Text>
				<Switch
					style={styles.switchBtn}
					onValueChange={() => {
						setIsSwitch({ s2: !isSwitch.s2, s1: false, s3: false })
					}}
					value={isSwitch.s2}
				/>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ fontSize: 16 }}>View True</Text>
				<Switch
					style={styles.switchBtn}
					onValueChange={() => {
						setIsSwitch({ s3: !isSwitch.s3, s2: false, s1: false })
					}}
					value={isSwitch.s3}
				/>
			</View>
		</View>
	)
}
