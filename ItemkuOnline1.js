// record:
// ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
// answer:
// ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]

function solution(records) {
	let answer = []
	let actionList = []
	let userList = []

	records.forEach(record => {
		// change data to easier format
		let formated_element = record.split(' ')
		let userData = {
			'id': formated_element[1],
			'name': formated_element.length < 3 ? null : formated_element[2]
		}
		let actionData = {
			'id': formated_element[1],
			'action': formated_element[0]
		}
		actionList.push(actionData)

		if (actionData.action === 'Enter')
			userList.push(userData)
		else if (actionData.action === 'Change') {
			userList.forEach(user => {
				if (user.id === userData.id)
					user.name = userData.name
			});
		}
	});

	actionList.forEach(action => {
		let name = ""
		userList.forEach(user => {
			if (user.id === action.id) {
				name = user.name
				break
			}
		});

		if (action.action === 'Enter')
			answer.push(name + " came in")
		else if (action.action === 'Leave')
			answer.push(name + " has left")
	});

	return answer
}

