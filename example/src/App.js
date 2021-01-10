import React from 'react'

import Avatar from 'react-simple-avatar'
import 'react-simple-avatar/dist/index.css'

const App = () => {
	return <div style={{ padding: 10 }}>
		<h2>With just a name</h2>
		<Avatar name="denis" />
		<h2>With different background colors</h2>
		<Avatar name="Denis" backgroundColor="red" />
		<Avatar name="Denis" backgroundColor="green" style={{ marginLeft: 10 }} />
		<h2>Square & rounded corners</h2>
		<Avatar name="denis" borderRadius="50%" />
		<Avatar name="denis" borderRadius="10px" style={{ marginLeft: 10 }} />
		<Avatar name="denis" borderRadius="0" style={{ marginLeft: 10 }} />
		<h2>With different sizes</h2>
		<div>
			<Avatar name="denis" size={10} />
			<Avatar name="denis" size={20} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={30} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={40} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={50} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={60} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={70} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={80} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={90} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={100} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={110} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={120} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={130} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={140} style={{ marginLeft: 10 }} />
			<Avatar name="denis" size={150} style={{ marginLeft: 10 }} />
		</div>
	</div>
}

export default App
