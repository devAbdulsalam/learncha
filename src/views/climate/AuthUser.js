const AuthUser = () => {
	console.log('Is logged in');
	const fromLocal = JSON.parse(localStorage.getItem('accessToken'));

	console.log(fromLocal);

	if (fromLocal != null) {
		return true;
	} else {
		return false;
	}
};

export default AuthUser;

// console.log('Is logged in')
//     const fromLocal = JSON.parse(localStorage.getItem('accessToken'));

//     console.log(fromLocal);
//     let requestStatus = '';
//     const api = process.env.REACT_APP_API_URL;

//     fetch(`${api}/me`,
//         {
//             headers: {
//                 accept: 'application/json',
//                 Authorization: `Bearer ${fromLocal}`
//             }
//         }
//     )
//     .then(response => {
//         requestStatus = response.status;
//         console.log(response.status)
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         if (data.hashed_password) {
//             return true
//         } else {
//             return false;
//         }
//     })
//     .catch(err => console.log(err));

//     if (requestStatus === 200) {
//         return true;
//     } else {
//         return false
//     }
