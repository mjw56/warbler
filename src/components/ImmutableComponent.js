import React from 'react';
import { is, fromJS } from 'immutable';

export class ImmutableComponent extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps))
  }
}