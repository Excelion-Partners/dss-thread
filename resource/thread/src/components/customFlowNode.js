import React, { memo } from 'react';
import eventBus from "../eventBus";

import { Handle } from 'react-flow-renderer';
import Common from '../common/common';
import { FaColumns, FaDatabase, FaList, FaProjectDiagram, FaQuestionCircle } from "react-icons/fa";

export default memo(({ data, isConnectable }) => {
  var project = "";
  var dataset = "";
  var column = "";

  function formatData(_data) {
    var project_splits = _data.project.split('|');
    switch (project_splits.length) {
      case 1:
        project = _data.project;
        dataset = _data.dataset;
        break;
      case 2:
        project = project_splits[0];
        dataset = project_splits[1];
        break;
      case 3:
        project = project_splits[0];
        dataset = project_splits[1];
        column = project_splits[2];
        break;
      default:
        project = _data.project;
        dataset = _data.dataset;
        break;
    }
  }

  function selectDataset(e) {
    e.preventDefault();
    eventBus.dispatch("datasetSelected", project + '|' + dataset);
  }

  formatData(data);

  return (
    <>
      <Handle
        className='thread-handle'
        type="target"
        position="left"
        isConnectable={isConnectable}
      />

      <div>
        <div>
          <FaProjectDiagram size='15px' /><span style={{ paddingLeft: '6px' }}>{project}</span>
        </div>
        {dataset != '' &&
          <div>
            <FaDatabase size='15px' /><span style={{ paddingLeft: '6px' }}>{dataset}</span>
            {/* <a href='javascript:void(0)' onClick={selectDataset}>{dataset}</a> */}
          </div>
        }
        {column != '' &&
          <div>
            <FaList size='15px' /><span style={{ paddingLeft: '6px' }}>{column}</span>
            {/* <p>{column}</p> */}
          </div>
        }
      </div>

      <Handle
        type="source"
        position="right"
        isConnectable={isConnectable}
      />
    </>
  );
});