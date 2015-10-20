/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

var studyGridStore = Ext.create('Ext.data.Store', {
	extend: 'Ext.data.Store',
    
    fields: ['studyId','medicalCaseId','patientId','patientName','patientWeight','patientBirthday','patientSex',
             'medicalCaseStatus','creatorUserId','creatorUserName','creatorUserMobile','creatorUserEmail','createTime',
             'studyDate','diagnoseImagePerformance','diagnoseImageResult','diagnoseUserId','diagnoseUserName','diagnoseUserMobile',
             'diagnoseUserEmail','diagnoseTime','reviewUserId','reviewUserName','reviewUserMobile','reviewUserEmail',
             'reviewImagePerformance','reviewImageResult','reviewTime','modality','bodyPartExamined','studyDescription','studyStatus'],
    autoLoad: false,
    //pageSize: 10,
    proxy: {
        type: 'ajax',
        url : appContext + 'admin/medicalCaseManage/listStudy.do',
        actionMethods: { read: 'POST' }  ,	
        pageParam:"page", 
        limitParam:"pageSize",
        reader: {
            type: 'json',
            root: 'data.studies',
            totalProperty: 'data.pager.totalCount'
        }
    }
});


Ext.define('MedicalProject.view.MedicalCaseManage', {
    extend: 'Ext.container.Container',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'form',
                            id:'medicalCaseManage_medicalCaseSearchForm',
                            flex: 0,
                            layout: {
                                columns: 4,
                                type: 'table'
                            },
                            bodyPadding: 10,
                            title: '请求管理',
                            items: [  
                                {
	                                xtype: 'datefield',
	                                margin: '0 5px',
	                                name:'createTime',
	                                format:'Y-m-d',
	                                fieldLabel: '创建日期'
	                            },
	                            {
	                                xtype: 'textfield',
	                                margin: '0 5px',
	                                name:'patientId',
	                                fieldLabel: '病人ID'
	                            },
                                {
                                    xtype: 'textfield',
                                    margin: '0 5px',
                                    name:'patientName',
                                    fieldLabel: '病人姓名'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '0 5px',
                                    name:'creatorUserName',
                                    fieldLabel: '创建用户'
                                },
                                {
                                    xtype: 'combobox',
                                    margin: '5px 5px 0 5px',
                                    fieldLabel: 'Study状态',
                                    name:'studyStatus',
                                    mode: 'remote',
                                    valueField: 'studyStatusName',
                                    displayField: 'studyStatusName',
                                    store:Ext.create('Ext.data.SimpleStore',{
                                    	fields: ['studyStatusCode', 'studyStatusName'],
                                    	data : [
                                    		['1','待诊断'],
                                    		['2','待审查'],
                                    		['3','完成审查']
                                    	]
                                    })
                                },
                                {
                                    xtype: 'button',
                                    id:'medicalCaseManage_searchBtn',
                                    margin: '5px 5px 0 5px',
                                    width: 80,
                                    text: '搜索'
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            id:'medicalCaseManage_studyGrid',
                            store: studyGridStore,
                            flex: 1,
                            title: '请求列表',
                            columns: [
								{
								    xtype: 'gridcolumn',
								    dataIndex: 'createTime',
								    text: '创建时间'
								},
								{
								    xtype: 'gridcolumn',
								    dataIndex: 'studyDate',
								    text: 'Study Date'
								},
								{
								    xtype: 'gridcolumn',
								    dataIndex: 'studyDescription',
								    text: 'Study Description'
								},
								{
								    xtype: 'gridcolumn',
								    dataIndex: 'studyStatus',
								    text: 'Study 状态'
								},
								{
                                    xtype: 'gridcolumn',
                                    dataIndex: 'modality',
                                    text: 'Modality'
                                },
								{
								    xtype: 'gridcolumn',
								    dataIndex: 'patientId',
								    text: '病人 ID'
								},
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'patientName',
                                    text: '病人姓名'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'patientBirthday',
                                    text: '病人生日'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'patientSex',
                                    text: '病人性别'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 108,
                                    dataIndex: 'creatorUserName',
                                    text: '创建用户'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'diagnoseImagePerformance',
                                    text: '图像表现(诊断)'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'diagnoseImageResult',
                                    text: '结论(诊断)'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'diagnoseUserName',
                                    text: '诊断医生'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'diagnoseTime',
                                    text: '诊断时间'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'reviewImagePerformance',
                                    text: '图像表现(审查)'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'reviewImageResult',
                                    text: '诊断结论(审查)'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'reviewUserName',
                                    text: '审查医生'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'reviewTime',
                                    text: '审查时间'
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    width: 360,
                                    displayInfo: true,
                                    store:studyGridStore
                                },
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        /*{
                                            xtype: 'button',
                                            id:'medicalCaseManage_tbDeleteBtn',
                                            text: '删除'
                                        }*/
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
        
        me.bindEvent();
        me.init();
    },
    init:function(){
    	var me = this;
    	var studyGrid = Ext.getCmp('medicalCaseManage_studyGrid');
    	studyGrid.getStore().load({
    		params:{
    			page:1
    		}
    	});
    },
    bindEvent: function(){
    	var me = this;
    	var studyGrid = Ext.getCmp('medicalCaseManage_studyGrid');
    	var searchBtn = Ext.getCmp('medicalCaseManage_searchBtn');
    	
    	
    	/*Ext.getCmp('userManage_tbDeleteUserBtn').on('click',function(){
    		var selection = userGrid.getSelectionModel().getSelection();

    		if( selection.length > 0 ){
    			var userId = selection[0].data.id;
    			Ext.Ajax.request({
    				url:appContext + 'admin/userManage/delUser.do',
    				params:{
    					userId: userId
    				},
    				success:function(){
    					userGrid.getStore().reload();
    				}
    			});
    		}else{
    			Ext.Msg.alert('提示','请选择用户');
    		}
    	});*/
    	
    	searchBtn.on('click',function(){
    		var medicalCaseSearchForm = Ext.getCmp('medicalCaseManage_medicalCaseSearchForm').getForm();
        	var searchParamObj = medicalCaseSearchForm.getValues();
        	
        	searchParamObj.page = 1;
        	studyGrid.store.reload({
        		params:searchParamObj,
        	});
    	});
    }

});