import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Alert,
	TextInput,
	SafeAreaView,
} from 'react-native'
import { data } from './src/data'

const App = () => {
	const [value, setValue] = useState('')
	const [inputData, setInputData] = useState(data)

	//useEffect(() => {}, [inputData])

	const Item = ({ name, text, id }) => {
		return (
			<TouchableOpacity
				style={styles.item}
				// onPress={() => console.log(text)}
				onPress={() => Alert.alert(text, id)}
				onLongPress={() => {
					removeItem(id)
				}}
				activeOpacity={0.3}
			>
				<Text style={styles.title}>{name}</Text>
				{/* {console.log(name)} */}
			</TouchableOpacity>
		)
	}

	const addItem = () => {
		if (value.trim()) {
			const data = [
				...inputData,
				{
					id: Date.now().toString(),
					title: value,
					text: (value + ' ').repeat(5),
				},
			]
			setInputData(data)
			setValue('')
		} else {
			Alert.alert('Ошибка ввода')
		}
	}

	const removeItem = (id) => {
		const data = inputData.filter((element) => element.id !== id)
		setInputData(data)
		//console.log(data)
	}

	const editItem = (id) => {}

	return (
		<SafeAreaView>
			<View style={styles.viewAddLine}>
				<TextInput
					style={styles.input}
					value={value}
					onChangeText={setValue}
					placeholder="Введите название ..."
					autoCorrect={false}
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.btnAdd} onPress={addItem}>
					<Text style={styles.title}>ADD</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.container}>
				<FlatList
					data={inputData}
					renderItem={({ item }) => (
						<Item name={item.title} text={item.text} id={item.id} />
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</SafeAreaView>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		marginTop: 8,
		marginBottom: 80,
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
	input: {
		width: '70%',
		fontSize: 20,
		marginLeft: 16,
		borderWidth: 0.25,
		borderColor: 'black',
		borderRadius: 16,
		paddingHorizontal: 16,
	},
	btnAdd: {
		backgroundColor: '#3498DB',
		borderRadius: 16,
		padding: 13,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
	},
	viewAddLine: {
		flexDirection: 'row',
		marginTop: 20,
		justifyContent: 'space-between',
	},
})
