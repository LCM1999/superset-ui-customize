/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import PropTypes from 'prop-types';
import netgraph from '@ideas-lab/netgraph/src/index';

const propTypes = {
  data: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

function NetGraph_1(element, props) {
  console.log('Props: ', props);
  console.log(element);
  const { data, width, height, formData, nodes, links } = props;

  console.log('height: ', height);
  console.log('width: ', width);

  const fd = formData;

  const data_true = {
    nodes: nodes,
    links: links,
  };
  //console.log(data_true)
  //console.log(fd.headerText)
  //选择要渲染的dom
  const div = d3.select(element);
  const html =
    '<div id=netgraph_IDEAS style="height:' + height + 'px; width:' + width + 'px;"></div>';
  div.html(html);

  //const button = fd.buttonChoose;//前端的x_y的字段形势到这里会变成xY这种
  //console.log(button)

  console.log('这是一条测试');

  const netGraph = new netgraph({
    canvasProps: {
      containerWidth: width,
      containerHeight: height,
      zoom: 0,
      container: 'netgraph_IDEAS', //要添加到的dom
      maxZoom: 4,
      minZoom: -4,
    },
    layout: 'square',
    data: data_true,
    style: [
      {
        selector: 'node',
        style: {
          width: 0,
          height: 40,
          url: d => '../../static/assets/images/favicon.png',
          opacity: 1,
          'background-color': '#aaa',
          'background-opacity': 1,
          'border-width': 5,
          'border-color': '#fff',
          'border-opacity': 1,
          color: '#845624',
          'text-opacity': 1,
          'font-size': 16,
          text: d => d.data.name,
          shape: 'circle',
        },
      },
      {
        selector: 'link',
        style: {
          width: 1,
          'line-color': '#456456',
          'line-opacity': 1,
          'to-arrow-shape': 'triangle',
          'to-arrow-color': '#858585',
          'to-arrow-fill': 'filled',
          color: '#845624',
          'text-opacity': 1,
          'font-size': 10,
          text: d => d.data.type,
        },
      },
    ],
  });

  console.log('这是一条测试2');

  netGraph.addEventListener('nodeClick', object => {
    console.log(object);
  });

  console.log('这是一条测试3');

  netGraph.addEventListener('brush', nodeIds => {
    console.log(nodeIds);
  });
  //if (button === 'layout'){
  //  console.log('触发了布局')
  //  const selectedNodes = netGraph.getSelectedNodes();
  //  const selectedNodeIds = new Array();
  //  selectedNodes.map((v, i) => {
  //    selectedNodeIds.push(v.getId());
  //  });
  //  netGraph.setNodeLayout("multSquare");
  //}
  //console.log(netGraph);
  console.log('用来对比state中的的东西');
  return netGraph;
}

NetGraph_1.displayName = 'NetGraph';
NetGraph_1.propTypes = propTypes;

export default NetGraph_1;
