import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tooltip from './components/Tooltip'

const AvatarImg = styled.img`
	width: ${props => `${props.passedStyles.size}px`};
	height: ${props => `${props.passedStyles.size}px`};
	background-color: ${props => props.passedStyles.backgroundColor};
	color: ${props => props.passedStyles.textColor};
	border-radius: ${props => props.passedStyles.borderRadius};
	overflow: hidden;
	display: inline-block;
`

const AvatarText = styled.span`
	width: ${props => `${props.passedStyles.size}px`};
	height: ${props => `${props.passedStyles.size}px`};
	background-color: ${props => props.passedStyles.backgroundColor};
	color: ${props => props.passedStyles.textColor};
	border-radius: ${props => props.passedStyles.borderRadius};
	overflow: hidden;
	display: inline-block;
	font-size: ${props => `${Math.round((props.passedStyles.size * 2) / 3)}px`};
	line-height: ${props => `${props.passedStyles.size}px`};
	text-align: center;
	font-weight: bold;
	text-transform: uppercase;
`

const Avatar = ({
	avatarUrl,
	name = `?`,
	className = ``,
	size = 50, // eslint-disable-line
	borderRadius = `50%`, // eslint-disable-line
	backgroundColor = `#8e8e8e`,// eslint-disable-line
	textColor = `#F1F1F1`, // eslint-disable-line
	enableTooltip = false,
	tooltipDirection = `top`,
	tooltipTextColor = `#FFFFFF`,
	tooltipBackgroundColor = `#000000`,
	tooltipMargin = 30,
	tooltipArrowSize = 6,
	tooltipDelay = 200,
	style = {}
}) => {
	const [loadAvatarHasError, setLoadAvatarHasError] = useState(false)

	useEffect(() => {
		setLoadAvatarHasError(false)
	}, [avatarUrl])

	let styles = { backgroundColor, textColor, size, borderRadius }

	let tooltipAttr = {
		delay: tooltipDelay,
		content: name,
		direction: tooltipDirection,
		textColor: tooltipTextColor,
		backgroundColor: tooltipBackgroundColor,
		margin: tooltipMargin,
		arrowSize: tooltipArrowSize
	}

	if (avatarUrl && loadAvatarHasError === false) {
		const contentImg = <AvatarImg
			passedStyles={styles}
			className={className}
			src={avatarUrl}
			alt={name}
			style={style}
			onError={() => setLoadAvatarHasError(true)} />

		if (enableTooltip) {
			return <Tooltip {...tooltipAttr}>
				{contentImg}
			</Tooltip>
		}
		return contentImg
	}

	const contentText = <AvatarText
		passedStyles={styles}
		style={style}
		className={className}>
		{name ? name[0] : `?`}
	</AvatarText>
	if (enableTooltip) {
		return <Tooltip {...tooltipAttr}>
			{contentText}
		</Tooltip>
	}
	return contentText

}

Avatar.propTypes = {
	avatarUrl: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.number,
	borderRadius: PropTypes.string,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	style: PropTypes.object
}

export default Avatar
