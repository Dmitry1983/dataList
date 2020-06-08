import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native'
import { data } from './src/data'

const Item = ({ name, text }) => {
	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => console.log(text)}
			activeOpacity={0.3}
		>
			<Text style={styles.title}>{name}</Text>
			{console.log(name)}
		</TouchableOpacity>
	)
}

const App = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => <Item name={item.title} text={item.text} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 8,
	},
	item: {
		backgroundColor: '#3498DB',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 16,
	},
	title: {
		fontSize: 26,
		color: 'white',
		textAlign: 'center',
	},
})
