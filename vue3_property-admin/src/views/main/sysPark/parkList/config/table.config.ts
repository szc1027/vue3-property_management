// table的配置项
export const tableConfig = {
    // showIndexColumn: true,
    // showSelectionColumn: true,
    // showExpandColumn: true,
    tableParams: {
        size: 'small',
        height: '460'
    },
    propList: [
        {
            id: 1,
            label: '车位名称',
            prop: 'parkName',

        },
        {
            id: 2,
            label: '车位类型',
            prop: 'parkType',
            slotName: 'parkType',

        },
        {
            id: 3,
            label: '使用状态',
            prop: 'parkStatus',
            slotName: "parkStatus"

        },
        {
            id: 4,
            label: '序号',
            prop: 'parkNum',

        },

        {
            id: 5,
            label: '操作',
            align: 'remark',
            width: 310,
            slotName: 'action'
        }
    ]
}
