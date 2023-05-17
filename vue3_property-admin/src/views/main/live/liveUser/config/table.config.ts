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
            label: '姓名',
            prop: 'loginName',

        },
        {
            id: 2,
            label: '性别',
            prop: 'sex',
            slotName: "sex"

        },
        {
            id: 3,
            label: '电话',
            prop: 'phone',

        },
        {
            id: 4,
            label: '栋数',
            prop: 'name',

        },
        {
            id: 5,
            label: '单元',
            prop: 'unitName',

        },
        {
            id: 6,
            label: '房屋编号',
            prop: 'houseNum',

        },
        {
            id: 7,
            label: '使用面积',
            prop: 'houseArea',

        },
        {
            id: 8,
            label: '车位',
            prop: 'parkName',

        },
        {
            id: 9,
            label: '是否启用',
            prop: 'status',
            slotName: "status"

        },

        {
            id: 10,
            label: '操作',
            align: 'remark',
            width: 700,
            slotName: 'action'
        }
    ]
}
