(function () {

	var myDataSource = new kendo.data.DataSource({
		transport: {
			read: {
				url: "/Api/ReadViewModel",
				type: "post",
				dataType: "json"
			},
			update: {
				url: "/Api/UpdateViewModel",
				type: "post",
				dataType: "json"
			}
		},
		schema: {
			model: {
				id: "Id",
				fields: {
					Id: { editable: false },
					FruitId: { type: "number" }
				}
			}
		}
	});

	var myViewModel = kendo.observable({
		dataSource: myDataSource,
		onChange: function (e) {
			var dataItem = e.sender.dataItem();
			this.dataSource.data()[0].set('FruitId', dataItem[e.sender.options.dataValueField]);
			this.dataSource.sync().then(function () {
				console.log('sync done.');
			});
		},
		selectedFruit: null,
		fruits: new kendo.data.DataSource({
			transport: {
				read: {
					url: "/Api/ReadSelectListOpts",
					type: "post",
					dataType: "json"
				}
			}
		})
	});

	kendo.bind($("#my_mvvm_container"), myViewModel);

	myDataSource.read().then(function () {
		console.log('read done.');
	});
})();
