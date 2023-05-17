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
            label: '栋数名称',
            prop: 'name',

        },
        {
            id: 2,
            label: '单元名称',
            prop: 'unitName',

        },
        {
            id: 3,
            label: '房屋编号',
            prop: 'houseNum',

        },
        {
            id: 3,
            label: '使用面积',
            prop: 'houseArea',

        },
        {
            id: 3,
            label: '使用状态',
            status: 'status',
            slotName: 'status'

        },

        {
            id: 4,
            label: '操作',
            align: 'remark',
            width: 310,
            slotName: 'action'
        }
    ]
}
