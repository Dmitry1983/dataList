import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Alert,
	ScrollView,
	SafeAreaView,
} from 'react-native'
import { data } from './src/data'

const all = true

const Item = ({ name, text, booked }) => {
	return (
		<TouchableOpacity
			//style={styles.item}
			//onPress={() => console.log(name)}
			onPress={() => Alert.alert(name, text)}
			activeOpacity={0.4}
		>
			{all ? (
				<View style={styles.item}>
					<View>
						<Text style={styles.title}>{name}</Text>
					</View>
					<View>
						<Text style={styles.title}>{booked ? 'true' : 'false'}</Text>
					</View>
				</View>
			) : null}

			{console.log(name)}
		</TouchableOpacity>
	)
}

const App = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<Item name={item.title} text={item.text} booked={item.booked} />
				)}
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
		marginBottom: 8,
	},
	item: {
		backgroundColor: '#4D9DFF',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 26,
		color: 'white',
		textAlign: 'center',
	},
})
