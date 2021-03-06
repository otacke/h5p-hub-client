import React from 'react';
import PropTypes from 'prop-types';

import ContentList from '../ContentList/ContentList';

import './SelectionsList.scss';

const SelectionsList = ({title, itemsPromise, actionLabel, onAction, onSelect, focused, setFocus}) => {
  return (
    <div className="h5p-hub-content-selection-list">
      <div className="h5p-hub-header">
        <div className="h5p-hub-title">{title}</div>
        <a className="h5p-hub-action" href="#" onClick={onAction}>{actionLabel}</a>
      </div>

      <ContentList 
        itemsPromise={itemsPromise}
        type="grid"
        visible={true}
        showPagination={false}
        onSelect={onSelect}
        setFocus={null}
        focused={focused}
        setFocus={setFocus}
        title={title}
      />
    </div>
  );
};

SelectionsList.propTypes = {
  title: PropTypes.string.isRequired,
  itemsPromise: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  setFocus: PropTypes.bool,
  focused: PropTypes.string
};

export default SelectionsList;