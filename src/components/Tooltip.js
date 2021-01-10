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
	padding: 6px;
	color: ${props => props.passedStyles.textColor};
	background: ${props => props.passedStyles.backgroundColor};
	font-size: 14px;
	font-family: sans-serif;
	line-height: 1;
	z-index: 100;
	white-space: nowrap;

	&::before {
		content: " ";
		border: solid transparent;
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
		border-width: ${props => `${props.passedStyles.arrowSize}px`};
		margin-left: ${props => `${-1 * props.passedStyles.arrowSize}px`});
	}

	&.top {
		left: 50%;
		transform: translateX(-50%);
		top: ${props => `${-1 * props.passedStyles.margin}px`};
		&::before {
			left: 50%;
			transform: translateX(-50%);
			top: 100%;
			border-top-color: ${props => props.passedStyles.backgroundColor};
		}
	}
	&.bottom {
		left: 50%;
		transform: translateX(-50%);
		bottom: calc(var(${props => props.passedStyles.margin}) * -1);
		&::before {
			left: 50%;
			transform: translateX(-50%);
			bottom: 100%;
			border-bottom-color: ${props => props.passedStyles.backgroundColor};
		}
	}

	&.right {
		left: calc(100% + ${props => props.passedStyles.margin / 4}px);
		top: 50%;
		transform:  translateY(-50%);
		text-align: left;
		&::before {
			left: ${props => `${-2 * props.passedStyles.arrowSize}px`};
			top: 50%;
			transform: translateY(-50%);
			border-right-color: ${props => props.passedStyles.backgroundColor};
		}
	}

	&.left {
		right: calc(100% + ${props => props.passedStyles.margin / 4}px);
		text-align: right;
		top: 50%;
		transform:  translateY(-50%);
		&::before {
			left: auto;
			right: ${props => `${-2 * props.passedStyles.arrowSize}px`};
			top: 50%;
			transform: translateY(-50%);
			border-left-color: ${props => props.passedStyles.backgroundColor};
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

	const passedStyles = { textColor, backgroundColor, margin, arrowSize }

	return <Wrapper
		passedStyles={passedStyles}
		onMouseEnter={showTip}
		onMouseLeave={hideTip}>
		{children}
		{active && <Tip passedStyles={passedStyles} className={direction}>
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
