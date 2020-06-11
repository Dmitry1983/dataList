import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		//flex: 1,
		marginTop: 8,
		marginBottom: 80,
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
	input: {
		width: '50%',
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
	switchBtn: {
		marginRight: 20,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '75%',
		height: '75%',
	},
	modalView: {
		margin: 20,
		padding: 35,
		alignItems: 'center',
	},
})
