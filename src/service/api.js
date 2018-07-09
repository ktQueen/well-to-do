const baseUrl = 'http://localhost:8000';
module.exports = {
  menuListUrl: baseUrl + '/mock/menu.json', // 目录的数据
  costOverViewUrl: baseUrl + '/mock/overView.json', // 获取费用总览数据
  costDetailUrl: baseUrl + '/mock/detail.json', // 获取费用明细
  modalDataUrl: baseUrl + '/mock/modal.json' // 获取ecs rds数据
};
