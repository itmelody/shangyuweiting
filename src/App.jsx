import { useState } from 'react'
import './App.css'

function App() {
  const [showDetail, setShowDetail] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)

  // 模拟数据
  const mockData = [
    { id: '90528558', area: '上虞/城南中队/网格7', plate: '浙DJ69E6', type: '小型汽车', handler: '金周', location: '青春路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:58:15', isFirst: false, printed: true, hasOwner: true },
    { id: '90528557', area: '上虞/城南中队/网格7', plate: '浙DE48Z4', type: '小型汽车', handler: '金周', location: '青春路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:57:44', isFirst: false, printed: true, hasOwner: true },
    { id: '90528553', area: '上虞/城北中队/网格1', plate: '浙B6ZJ33', type: '小型汽车', handler: '李彬彬', location: '观山路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:49:00', isFirst: false, printed: true, hasOwner: false },
    { id: '90528551', area: '上虞/城北中队/网格1', plate: '浙D2V787', type: '小型汽车', handler: '李彬彬', location: '江东路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:40:39', isFirst: false, printed: true, hasOwner: true },
    { id: '90528549', area: '上虞/城北中队/网格1', plate: '浙D2L7M9', type: '小型汽车', handler: '李彬彬', location: '江东路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:39:39', isFirst: false, printed: true, hasOwner: true },
    { id: '90528545', area: '上虞/城北中队/网格1', plate: '浙DVG695', type: '小型新能源汽车', handler: '李彬彬', location: '江东路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:37:05', isFirst: false, printed: true, hasOwner: true },
    { id: '90528544', area: '上虞/城北中队/网格1', plate: '浙D082W9', type: '小型汽车', handler: '李彬彬', location: '江东路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:35:29', isFirst: false, printed: true, hasOwner: true },
    { id: '90528543', area: '上虞/城北中队/网格1', plate: '浙M1W98M', type: '小型汽车', handler: '李彬彬', location: '江东路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:34:35', isFirst: false, printed: true, hasOwner: true },
    { id: '90528542', area: '上虞/城北中队/网格1', plate: '浙D07C5Y7', type: '小型汽车', handler: '李彬彬', location: '江广路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:30:23', isFirst: false, printed: true, hasOwner: false },
    { id: '90528540', area: '上虞/城北中队/网格1', plate: '浙D07C5Y7', type: '小型汽车', handler: '李彬彬', location: '江广路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:23:46', isFirst: false, printed: true, hasOwner: true },
    { id: '90528539', area: '上虞/城北中队/网格1', plate: '浙DQA482', type: '小型汽车', handler: '李彬彬', location: '江广路', status: '待审核', punishType: '处罚', time: '2026-05-29 09:22:54', isFirst: false, printed: true, hasOwner: true },
    { id: '90528532', area: '上虞/城中中队/网格3', plate: '浙DW5E3Y3', type: '小型汽车', handler: '高文杰', location: '人民大道', status: '待审核', punishType: '处罚', time: '2026-05-29 09:11:21', isFirst: false, printed: true, hasOwner: true },
  ]

  const handleViewDetail = (record) => {
    setSelectedRecord(record)
    setShowDetail(true)
  }

  const handleCloseDetail = () => {
    setShowDetail(false)
    setSelectedRecord(null)
  }

  return (
    <div className="app">
      {/* 顶部导航 */}
      <div className="header">
        <div className="header-left">
          <div className="logo">📊</div>
          <span className="system-name">指挥联动执法系统</span>
        </div>
        <div className="header-center">
          <div className="active-tab">🔍 柔性执法</div>
        </div>
        <div className="header-right">
          <span className="user-info">A sn009(大厅审核员)</span>
        </div>
      </div>

      {/* 筛选区域 */}
      <div className="filter-section">
        <div className="filter-row">
          <div className="filter-item">
            <label>请选择区域</label>
            <input type="text" placeholder="" />
          </div>
          <div className="filter-item">
            <input type="text" placeholder="浙D" />
          </div>
          <div className="filter-item">
            <input type="text" placeholder="车牌号" />
          </div>
          <div className="filter-item date-range">
            <input type="text" placeholder="2026-05-29 00:00:00" />
            <span>至</span>
            <input type="text" placeholder="2026-05-29 12:00:00" />
          </div>
          <div className="filter-item">
            <label>编号</label>
            <input type="text" placeholder="" />
          </div>
          <div className="filter-actions">
            <button className="btn-more">^ 更多</button>
            <button className="btn-export">导出 ▾</button>
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-item">
            <select>
              <option>处理状态</option>
            </select>
          </div>
          <div className="filter-item">
            <select>
              <option>是否有效</option>
            </select>
          </div>
          <div className="filter-item">
            <select>
              <option>是否首次违停</option>
            </select>
          </div>
          <div className="filter-item">
            <input type="text" placeholder="柔性执法编号" />
          </div>
          <div className="filter-item">
            <select>
              <option>罚单已打印</option>
            </select>
          </div>
          <div className="filter-item">
            <select>
              <option>处罚类型</option>
            </select>
          </div>
          <div className="filter-item">
            <select>
              <option>车辆类型</option>
            </select>
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-item">
            <select>
              <option>柔性执法状态</option>
            </select>
          </div>
          <div className="filter-item">
            <input type="text" placeholder="执法人员编号" />
          </div>
          <div className="filter-item">
            <select>
              <option>有无车主信息</option>
            </select>
          </div>
          <div className="filter-item search-btn-wrapper">
            <button className="btn-search"> 查询</button>
          </div>
        </div>
      </div>

      {/* 统计数据 */}
      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-label">柔性执法数量</span>
          <span className="stat-value">326,185</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">处罚数量</span>
          <span className="stat-value">132,422</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">驶离率</span>
          <span className="stat-value">71.12%</span>
        </div>
      </div>

      {/* 数据表格 */}
      <div className="table-section">
        <table className="data-table">
          <thead>
            <tr>
              <th>违停时间</th>
              <th>编号</th>
              <th>所属区域</th>
              <th>车牌号</th>
              <th>车辆类型</th>
              <th>处理人</th>
              <th>地点</th>
              <th>处理状态</th>
              <th>处理类型</th>
              <th>柔性执法状态</th>
              <th>是否有效</th>
              <th>纸单是否打印</th>
              <th>有无车主信息</th>
              <th>详情</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item, index) => (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.id}</td>
                <td>{item.area}</td>
                <td>{item.plate}</td>
                <td>{item.type}</td>
                <td>{item.handler}</td>
                <td>{item.location}</td>
                <td>{item.status}</td>
                <td>{item.punishType}</td>
                <td>*</td>
                <td>*</td>
                <td>{item.printed ? '是' : '否'}</td>
                <td>{item.hasOwner ? '有' : '无'}</td>
                <td><button className="btn-icon" onClick={() => handleViewDetail(item)}>□</button></td>
                <td>无</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 分页 */}
        <div className="pagination">
          <select>
            <option>20 条/页</option>
          </select>
          <span>跳至</span>
          <input type="text" defaultValue="1" />
          <span>页</span>
        </div>
      </div>

      {/* 详情弹窗 */}
      {showDetail && selectedRecord && (
        <div className="modal-overlay" onClick={handleCloseDetail}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span>详情</span>
              <button className="btn-close" onClick={handleCloseDetail}>✕</button>
            </div>
            <div className="modal-body">
              <div className="detail-grid">
                <div className="detail-item">
                  <label>车辆类型:</label>
                  <input type="text" value={selectedRecord.type} readOnly />
                </div>
                <div className="detail-item">
                  <label>违停地点:</label>
                  <input type="text" value={selectedRecord.location} readOnly />
                </div>
                <div className="detail-item">
                  <label>车牌号:</label>
                  <input type="text" value={selectedRecord.plate} readOnly />
                </div>
                <div className="detail-item">
                  <label>违停时间:</label>
                  <input type="text" value={selectedRecord.time} readOnly />
                </div>
                <div className="detail-item">
                  <label>是否年度内首次违停:</label>
                  <input type="text" value={selectedRecord.isFirst ? '是' : '否'} readOnly />
                </div>
                <div className="detail-item">
                  <label>是否导出:</label>
                  <input type="text" value="未导出" readOnly />
                </div>
                <div className="detail-item">
                  <label>纸单是否打印:</label>
                  <input type="text" value={selectedRecord.printed ? '是' : '否'} readOnly />
                </div>
                <div className="detail-item">
                  <label>处理人:</label>
                  <input type="text" value={selectedRecord.handler} readOnly />
                </div>
                <div className="detail-item">
                  <label>处理人部门:</label>
                  <input type="text" value={selectedRecord.area} readOnly />
                </div>
                <div className="detail-item">
                  <label>处理状态:</label>
                  <input type="text" value={selectedRecord.status} readOnly />
                </div>
                <div className="detail-item">
                  <label>处理类型:</label>
                  <input type="text" value={selectedRecord.punishType} readOnly />
                </div>
                <div className="detail-item">
                  <label>编号:</label>
                  <input type="text" value={selectedRecord.id} readOnly />
                </div>
                <div className="detail-item full-width">
                  <label>短信内容:</label>
                  <textarea readOnly></textarea>
                </div>
                <div className="detail-item full-width">
                  <label>描述:</label>
                  <input type="text" value={`中国浙江省绍兴市上虞区${selectedRecord.location}中段`} readOnly />
                </div>
                <div className="detail-item">
                  <label>违停照片:</label>
                  <div className="photo-preview">
                    <div className="photo-placeholder"></div>
                    <div className="photo-placeholder">📷</div>
                  </div>
                </div>
                <div className="detail-item full-width">
                  <label>作废原因:</label>
                  <textarea readOnly></textarea>
                </div>
              </div>

              <div className="approval-flow">
                <label>审核流程:</label>
                <div className="flow-content">暂无</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
