import React, { useState } from "react"
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	display: inline-block;
  	position: relative;
`

const Tip = styled.div`
	position: absolute;
	border-radius: 4px;
	left: 50%;
	transform: translateX(-50%);
	padding: 6px;
	color: ${props => props.textColor};
	background: var(${props => `${props.backgroundColor}`});
	font-size: 14px;
	font-family: sans-serif;
	line-height: 1;
	z-index: 100;
	white-space: nowrap;

	&::before {
		content: " ";
		left: 50%;
		border: solid transparent;
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
		border-width: var(${props => props.arrowSize});
		margin-left: calc(var(${props => props.arrowSize}) * -1);
	}

	&.right {
		left: calc(100% + var(${props => props.margin}));
		top: 50%;
		transform: translateX(0) translateY(-50%);
		&::before {
			left: calc(var(${props => props.arrowSize}) * -1);
			top: 50%;
			transform: translateX(0) translateY(-50%);
			border-right-color: var(${props => props.backgroundColor});
		}
	}
	&.bottom {
		bottom: calc(var(${props => props.margin}) * -1);
		&::before {
			bottom: 100%;
			border-bottom-color: var(${props => props.backgroundColor});
		}
	}
	&.left {
		left: auto;
		right: calc(100% + var(${props => props.margin}));
		top: 50%;
		transform: translateX(0) translateY(-50%);
		&::before {
			left: auto;
			right: calc(var(${props => props.arrowSize}) * -2);
			top: 50%;
			transform: translateX(0) translateY(-50%);
			border-left-color: var(${props => props.backgroundColor});
		}
	}
`

const Tooltip = ({
	delay = 400,
	children,
	direction = `top`,
	content = ``,
	textColor = `#F1F1F1`, // eslint-disable-line
	backgroundColor = `#000000`, // eslint-disable-line
	margin = 30, // eslint-disable-line
	arrowSize = 6 // eslint-disable-line
}) => {
	let timeout
	const [active, setActive] = useState(false)

	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true)
		}, delay)
	}

	const hideTip = () => {
		clearInterval(timeout)
		setActive(false)
	}

	return <Wrapper
		onMouseEnter={showTip}
		onMouseLeave={hideTip}>
		{children}
		{active && <Tip className={`${direction}`}>
			{content}
		</Tip>}
	</Wrapper>

}

Tooltip.propTypes = {
	delay: PropTypes.number,
	children: PropTypes.node,
	direction: PropTypes.oneOf([`top`, `bottom`, `right`, `left`]),
	content: PropTypes.node,
	textColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	margin: PropTypes.number,
	arrowSize: PropTypes.number
}

export default Tooltip
