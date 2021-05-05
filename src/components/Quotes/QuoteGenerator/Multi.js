import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const getNavStyles = (indx, length) => {
  let styles = []
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done')
    } else if (i === indx) {
      styles.push('doing')
    } else {
      styles.push('todo')
    }
  }
  return styles
}

const getButtonsState = (indx, length) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showSecondstep: true,
      showPreviousBtn: true,
      showNextBtn: true

    }
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
      showCancelBtn: true,
      showFirststep: true
    }
  } else {
    return {
      showPreviousBtn: true,
      showSubmitBtn: true,
      showThirdstep: true
    }
  }
}

const useStyles = makeStyles(theme => ({
  ButtonContained: {
    padding: '.54rem 2.14rem',
    color: '#ffffff',
    fontSize: '14px',
    display:'inline-flex',
    alignItems:'center',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    fontWeight:'bold',
    textDecoration:'none',
    "&:hover": {
      color: '#ffffff',
    }
  },
  ButtonOutlined: {
    padding: '.54rem 2.14rem',
    textTransform: 'uppercase',
    fontSize: '14px',
    display:'inline-flex',
    alignItems:'center',
    borderRadius: 4,
    color: theme.palette.primary.main,
    fontWeight:'bold',
    textDecoration:'none',
    "&:hover": {
      color: theme.palette.primary.main,
    }
  }
}));

export default function MultiStep(props) {
  const [stylesState, setStyles] = useState(getNavStyles(0, props.steps.length))
  const [compState, setComp] = useState(0)
  const [buttonsState, setButtons] = useState(getButtonsState(0, props.steps.length))
  const classes = useStyles();
  function setStepState(indx) {
    setStyles(getNavStyles(indx, props.steps.length))
    setComp(indx < props.steps.length ? indx : compState)
    setButtons(getButtonsState(indx, props.steps.length))
  }

  const next = () => setStepState(compState + 1)

  const previous = () => setStepState((compState > 0) ? compState - 1 : compState)

  const handleKeyDown = (evt) => evt.which === 13 ? next(props.steps.length) : {}

  const handleOnClick = (evt) => {
    if (evt.currentTarget.value === props.steps.length - 1 && compState === props.steps.length - 1) {
      setStepState(props.steps.length)
    } else {
      setStepState(evt.currentTarget.value)
    }
  }

  const renderSteps = () =>
    props.steps.map((s, i) => (
      <li
        className={'progtrckrs-' + stylesState[i]}
        onClick={handleOnClick}
        key={i}
        value={i}
      >
        <em>{i + 1}</em>
        <span>{props.steps[i].name}</span>
      </li>
    ))

  return (
    <div className='stepheading' onKeyDown={handleKeyDown}>
      <ol className='fourth-step'>
        {renderSteps()}
      </ol>
      {props.steps[compState].component}
      <div className="paybuttons" style={props.showNavigation ? {} : { display: 'none' }}>

        <Button color="secondary" className="cancelbtn" className={classes.ButtonOutlined}
          style={buttonsState.showPreviousBtn ? {} : { display: 'none' }}
          onClick={previous} >
          Back
        </Button>

        <Link to="/" className={classes.ButtonOutlined}
          style={buttonsState.showCancelBtn ? {} : { display: 'none' }}
          onClick={next} >
          Cancel
        </Link>

        <Button color="secondary" variant="contained" className={classes.ButtonContained}
          style={buttonsState.showNextBtn ? {} : { display: 'none' }}
          onClick={next} >
          Next
        </Button>

        <Link to="./quoteGeneratorSuccess" className={classes.ButtonContained}
          style={buttonsState.showSubmitBtn ? {} : { display: 'none' }}
          onClick={next} >
          Submit
        </Link>

      </div>
    </div>
  );
}

MultiStep.defaultProps = {
  showNavigation: true
}