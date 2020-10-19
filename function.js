		var n = 0;
		var page = 1;
		var sign = 0;
		var modNum = 0;
		var modNumWorked = 0;
		var modNumUnworked = 0;
		var pageItem = 5;
		var pageItemO = 5;
		function closeadd()
		{
			document.getElementById("addback").style.display="none";
			document.getElementById("addcon").style.display="none";
		}
		function openadd()
		{
			document.getElementById("addback").style.display="block";
			document.getElementById("addcon").style.display="block";
		}
		
		function addList() /*添加*/
		{	
			n++;
			var xvHao = n;
			var oNum = document.getElementById("num").value;
			var oUser = document.getElementById("username").value;
			var oColl = document.getElementById("college").value;
			var oMaj = document.getElementById("major").value;
			var oGrade = document.getElementById("grade").value;
			var oClass = document.getElementById("class").value;
			var oAge = document.getElementById("age").value;
			document.getElementById("num").className = "addblock-item-blank";
			document.getElementById("username").className = "addblock-item-blank";
			document.getElementById("college").className = "addblock-item-blank";
			document.getElementById("major").className = "addblock-item-blank";
			document.getElementById("grade").className = "addblock-item-blank";
			document.getElementById("class").className = "addblock-item-blank";
			document.getElementById("age").className = "addblock-item-blank";
			document.getElementById("err1").innerHTML = "";
			document.getElementById("err2").innerHTML = "";
			document.getElementById("err3").innerHTML = "";
			document.getElementById("err4").innerHTML = "";
			document.getElementById("err5").innerHTML = "";
			document.getElementById("err6").innerHTML = "";
			document.getElementById("err7").innerHTML = "";
			/*if(checkinput()){
				n--;
			}else{*/
			var oTr = document.createElement("tr");
			var oTd0 = document.createElement("td");
			var oInput = document.createElement("input");
			oTd0.appendChild(oInput);
			oInput.setAttribute("type","checkbox");
			oInput.setAttribute("name","item");
			var oTd1 = document.createElement("td");
			oTd1.innerHTML = xvHao;
			var oTd2 = document.createElement("td");
			oTd2.innerHTML = oNum;
			var oTd3 = document.createElement("td");
			oTd3.innerHTML = oUser;
			var oTd4 = document.createElement("td");
			oTd4.innerHTML = oColl;
			var oTd5 = document.createElement("td");
			oTd5.innerHTML = oMaj;
			var oTd6 = document.createElement("td");
			oTd6.innerHTML = oGrade;
			var oTd7 = document.createElement("td");
			oTd7.innerHTML = oClass;
			var oTd8 = document.createElement("td");
			oTd8.innerHTML = oAge;
			var oTd9 = document.createElement("td");
			var oInput2 = document.createElement("input");
			var oInput3 = document.createElement("input");
			oInput2.setAttribute("type","button");
			oInput2.setAttribute("value","查看");
			oInput2.setAttribute("onclick","check(this)");
			oInput3.setAttribute("type","button");
			oInput3.setAttribute("value","修改");
			oInput3.setAttribute("onclick","modify(this)");
			if(n%2 == 0){
				oInput2.className = "btn2";
				oInput3.className = "btn2";
			}else{
				oInput2.className = "btn1";
				oInput3.className = "btn1";
			}
			oTd9.appendChild(oInput2);
			oTd9.appendChild(oInput3);
			if(n%2 == 0){
				oTr.className = "content-style-down-hidden";
			}else{
				oTr.className = "content-style-up-hidden";
			}
			oTr.appendChild(oTd0);
			oTr.appendChild(oTd1);
			oTr.appendChild(oTd2);
			oTr.appendChild(oTd3);
			oTr.appendChild(oTd4);
			oTr.appendChild(oTd5);
			oTr.appendChild(oTd6);
			oTr.appendChild(oTd7);
			oTr.appendChild(oTd8);
			oTr.appendChild(oTd9);
			var olistTable = document.getElementById("listTable");
			olistTable.appendChild(oTr);
			document.getElementById("num").value = "";
			document.getElementById("username").value = "";
			document.getElementById("college").value = "";
			document.getElementById("major").value = "";
			document.getElementById("grade").value = "";
			document.getElementById("class").value = "";
			document.getElementById("age").value = "";
			closeadd();
			updateNumber();
			showitem();
			if(n > page*pageItem)
				nextpage();
		}
		
		function chechAll(c){
			var status = c.checked;
			var oItems = document.getElementsByName("item");
			for(var i=0;i<oItems.length;i++){
				oItems[i].checked=status;
			}
		}
		
		function delAll(){
			var num = 0;
			var leave;
			var origin = n;
			var olistTable = document.getElementById("listTable");
			var items = document.getElementsByName("item");
			for(var j=0;j<items.length;j++){
				if(items[j].checked)//如果item被选中
				{
					var oParentnode = items[j].parentNode.parentNode;
					olistTable.removeChild(oParentnode);
					j--;
					n--;
					num++;
				}
			}
			leave = origin - num;
			updateNumber();
			rearrangeItem();
			while((page-1)*pageItem >= leave && page!= 1)
			{
				boforepage();
			}
		}	/*和删除处理相关内容*/
		
		function check(obj){
			document.getElementById("addback").style.display="block";
			document.getElementById("checkcon").style.display="block";
			var oTr = obj.parentNode.parentNode;
			var aTd = oTr.getElementsByTagName("td");
			/*rowIndex = obj.parentNode.parentNode.rowIndex;*/
			document.getElementById("check-num").innerHTML  = "工号："+aTd[2].innerHTML;
			document.getElementById("check-username").innerHTML  = "姓名："+aTd[3].innerHTML;
			document.getElementById("check-college").innerHTML  = "部门："+aTd[4].innerHTML;
			document.getElementById("check-major").innerHTML  = "职务："+aTd[5].innerHTML;
			document.getElementById("check-grade").innerHTML  = "工龄："+aTd[6].innerHTML;
			document.getElementById("check-class1").innerHTML  = "是否入党："+aTd[7].innerHTML;
			document.getElementById("check-age").innerHTML  = "年龄："+aTd[8].innerHTML;
		}
		
		function chooseModify(){
			modNum = 0;
			modNumWorked = 0;
			modNumUnworked = 0;
			document.getElementById("addback").style.display="block";
			document.getElementById("choosemodifycon").style.display="block";
			document.getElementById("CMinput").className = "addblock-buttom-hidden";
			document.getElementById("CMnextPage").className = "addblock-buttom-hidden";
			document.getElementById("CMbeforePage").className = "addblock-buttom-hidden";
			var olistTable = document.getElementById("listTable");
			var items = document.getElementsByName("item");
			for(var j=0;j<items.length;j++){
				if(items[j].checked)//如果item被选中
				{
					
					modNum++;
				}
			}
			for(var i=0;i<items.length;i++){
				if(items[i].checked)//如果item被选中
				{
					var oNum = document.getElementById("Cmod-num");
					var oUser = document.getElementById("Cmod-username");
					var oColl = document.getElementById("Cmod-college");
					var oMaj = document.getElementById("Cmod-major");
					var oGrade = document.getElementById("Cmod-grade");
					var oClass = document.getElementById("Cmod-class");
					var oAge = document.getElementById("Cmod-age");
					var oTr = items[i].parentNode.parentNode;
					var aTd = oTr.getElementsByTagName("td");
					rowIndex = items[i].parentNode.parentNode.rowIndex;
					oNum.value = aTd[2].innerHTML;
					oUser.value = aTd[3].innerHTML;
					oColl.value = aTd[4].innerHTML;
					oMaj.value = aTd[5].innerHTML;
					oGrade.value = aTd[6].innerHTML;
					oClass.value = aTd[7].innerHTML;
					oAge.value = aTd[8].innerHTML;
					if(modNum == 1)
					{
						document.getElementById("CMinput").className = "addblock-buttom";
					}else if(modNum >1){
						document.getElementById("CMnextPage").className = "addblock-buttom";
					}
					break;
				}
			}
			showModInfo();
		}
		
		function showModInfo()
		{
			modNumUnworked = modNum - modNumWorked;
			document.getElementById("bottomText").innerHTML = "共"+modNum+"条，"+modNumWorked+"已修改，"+modNumUnworked+"条待修改。";
		}
		
		function closeChooseModify(){
			document.getElementById("addback").style.display="none";
			document.getElementById("choosemodifycon").style.display="none";
		}
		
		function chooseUpdate(){
			var oNum = document.getElementById("Cmod-num").value;
			var oUser = document.getElementById("Cmod-username").value;
			var oColl = document.getElementById("Cmod-college").value;
			var oMaj = document.getElementById("Cmod-major").value;
			var oGrade = document.getElementById("Cmod-grade").value;
			var oClass = document.getElementById("Cmod-class").value;
			var oAge = document.getElementById("Cmod-age").value;
			document.getElementById("Cmod-num").className = "addblock-item-blank";
			document.getElementById("Cmod-username").className = "addblock-item-blank";
			document.getElementById("Cmod-college").className = "addblock-item-blank";
			document.getElementById("Cmod-major").className = "addblock-item-blank";
			document.getElementById("Cmod-grade").className = "addblock-item-blank";
			document.getElementById("Cmod-class").className = "addblock-item-blank";
			document.getElementById("Cmod-age").className = "addblock-item-blank";
			/*if(checkmodify()){
				
			}
			else{*/
				var oMytable = document.getElementById("mytable");
				console.log(oMytable.rows[rowIndex].cells);
				oMytable.rows[rowIndex].cells[2].innerHTML = oNum;
				oMytable.rows[rowIndex].cells[3].innerHTML = oUser;
				oMytable.rows[rowIndex].cells[4].innerHTML = oColl;
				oMytable.rows[rowIndex].cells[5].innerHTML = oMaj;
				oMytable.rows[rowIndex].cells[6].innerHTML = oGrade;
				oMytable.rows[rowIndex].cells[7].innerHTML = oClass;
				oMytable.rows[rowIndex].cells[8].innerHTML = oAge;
				modNumWorked++;
				closeCmod();
				var olistTable = document.getElementById("listTable");
				var items = document.getElementsByName("item");
				for(var j=0;j<items.length;j++){
					if(items[j].checked)//如果item被选中
					{
						
						items[j].checked = false;
					}
				}
		}
		
		function chooseUpdateNext(){
			var oNum = document.getElementById("Cmod-num").value;
			var oUser = document.getElementById("Cmod-username").value;
			var oColl = document.getElementById("Cmod-college").value;
			var oMaj = document.getElementById("Cmod-major").value;
			var oGrade = document.getElementById("Cmod-grade").value;
			var oClass = document.getElementById("Cmod-class").value;
			var oAge = document.getElementById("Cmod-age").value;
			document.getElementById("Cmod-num").className = "addblock-item-blank";
			document.getElementById("Cmod-username").className = "addblock-item-blank";
			document.getElementById("Cmod-college").className = "addblock-item-blank";
			document.getElementById("Cmod-major").className = "addblock-item-blank";
			document.getElementById("Cmod-grade").className = "addblock-item-blank";
			document.getElementById("Cmod-class").className = "addblock-item-blank";
			document.getElementById("Cmod-age").className = "addblock-item-blank";
			/*if(checkmodify()){
				
			}
			else{*/
				var oMytable = document.getElementById("mytable");
				console.log(oMytable.rows[rowIndex].cells);
				oMytable.rows[rowIndex].cells[2].innerHTML = oNum;
				oMytable.rows[rowIndex].cells[3].innerHTML = oUser;
				oMytable.rows[rowIndex].cells[4].innerHTML = oColl;
				oMytable.rows[rowIndex].cells[5].innerHTML = oMaj;
				oMytable.rows[rowIndex].cells[6].innerHTML = oGrade;
				oMytable.rows[rowIndex].cells[7].innerHTML = oClass;
				oMytable.rows[rowIndex].cells[8].innerHTML = oAge;
				modNumWorked++;
				document.getElementById("CMnextPage").className = "addblock-buttom-hidden";
				document.getElementById("CMbeforePage").className = "addblock-buttom";
				if(modNum == modNumWorked + 1)
					document.getElementById("CMinput").className = "addblock-buttom";
				else
					document.getElementById("CMnextPage").className = "addblock-buttom";
				var olistTable = document.getElementById("listTable");
				var items = document.getElementsByName("item");
				var a = 0;
				for(var j=0;j<items.length;j++){
					if(items[j].checked)//如果item被选中
					{
						a++;
						if(a-1 == modNumWorked)
						{	
							var oNum = document.getElementById("Cmod-num");
							var oUser = document.getElementById("Cmod-username");
							var oColl = document.getElementById("Cmod-college");
							var oMaj = document.getElementById("Cmod-major");
							var oGrade = document.getElementById("Cmod-grade");
							var oClass = document.getElementById("Cmod-class");
							var oAge = document.getElementById("Cmod-age");
							var oTr = items[j].parentNode.parentNode;
							var aTd = oTr.getElementsByTagName("td");
							rowIndex = items[j].parentNode.parentNode.rowIndex;
							oNum.value = aTd[2].innerHTML;
							oUser.value = aTd[3].innerHTML;
							oColl.value = aTd[4].innerHTML;
							oMaj.value = aTd[5].innerHTML;
							oGrade.value = aTd[6].innerHTML;
							oClass.value = aTd[7].innerHTML;
							oAge.value = aTd[8].innerHTML;
							break;
						}
					}
				}
			showModInfo();
		}
		
		function chooseUpdateBefore(){
			modNumWorked--;
			var olistTable = document.getElementById("listTable");
			var items = document.getElementsByName("item");
			var a = 0;
			for(var j=0;j<items.length;j++){
				if(items[j].checked)//如果item被选中
				{
					if(a == modNumWorked)
					{	
						var oNum = document.getElementById("Cmod-num");
						var oUser = document.getElementById("Cmod-username");
						var oColl = document.getElementById("Cmod-college");
						var oMaj = document.getElementById("Cmod-major");
						var oGrade = document.getElementById("Cmod-grade");
						var oClass = document.getElementById("Cmod-class");
						var oAge = document.getElementById("Cmod-age");
						var oTr = items[j].parentNode.parentNode;
						var aTd = oTr.getElementsByTagName("td");
						rowIndex = items[j].parentNode.parentNode.rowIndex;
						oNum.value = aTd[2].innerHTML;
						oUser.value = aTd[3].innerHTML;
						oColl.value = aTd[4].innerHTML;
						oMaj.value = aTd[5].innerHTML;
						oGrade.value = aTd[6].innerHTML;
						oClass.value = aTd[7].innerHTML;
						oAge.value = aTd[8].innerHTML;
						break;
					}
					a++;
				}
			}
			document.getElementById("CMnextPage").className = "addblock-buttom-hidden";
			document.getElementById("CMinput").className = "addblock-buttom-hidden";
			document.getElementById("CMbeforePage").className = "addblock-buttom-hidden";
			document.getElementById("CMnextPage").className = "addblock-buttom";
			if(modNumWorked+1 != 1)
				document.getElementById("CMbeforePage").className = "addblock-buttom";
			showModInfo();
		}
		
		
		function closecheck(){
			document.getElementById("addback").style.display="none";
			document.getElementById("checkcon").style.display="none";
		}
		
		function modify(obj){
			document.getElementById("addback").style.display="block";
			document.getElementById("modifycon").style.display="block";
			var oNum = document.getElementById("mod-num");
			var oUser = document.getElementById("mod-username");
			var oColl = document.getElementById("mod-college");
			var oMaj = document.getElementById("mod-major");
			var oGrade = document.getElementById("mod-grade");
			var oClass = document.getElementById("mod-class");
			var oAge = document.getElementById("mod-age");
			var oTr = obj.parentNode.parentNode;
			var aTd = oTr.getElementsByTagName("td");
			rowIndex = obj.parentNode.parentNode.rowIndex;
			oNum.value = aTd[2].innerHTML;
			oUser.value = aTd[3].innerHTML;
			oColl.value = aTd[4].innerHTML;
			oMaj.value = aTd[5].innerHTML;
			oGrade.value = aTd[6].innerHTML;
			oClass.value = aTd[7].innerHTML;
			oAge.value = aTd[8].innerHTML;
		}
		
		function closemod(obj){
			document.getElementById("addback").style.display="none";
			document.getElementById("modifycon").style.display="none";
		}
		
		function closeCmod(obj){
			document.getElementById("addback").style.display="none";
			document.getElementById("choosemodifycon").style.display="none";
		}
		
		function update(){
			var oNum = document.getElementById("mod-num").value;
			var oUser = document.getElementById("mod-username").value;
			var oColl = document.getElementById("mod-college").value;
			var oMaj = document.getElementById("mod-major").value;
			var oGrade = document.getElementById("mod-grade").value;
			var oClass = document.getElementById("mod-class").value;
			var oAge = document.getElementById("mod-age").value;
			document.getElementById("mod-num").className = "addblock-item-blank";
			document.getElementById("mod-username").className = "addblock-item-blank";
			document.getElementById("mod-college").className = "addblock-item-blank";
			document.getElementById("mod-major").className = "addblock-item-blank";
			document.getElementById("mod-grade").className = "addblock-item-blank";
			document.getElementById("mod-class").className = "addblock-item-blank";
			document.getElementById("mod-age").className = "addblock-item-blank";
			if(checkmodify()){
				
			}
			else{
			var oMytable = document.getElementById("mytable");
			console.log(oMytable.rows[rowIndex].cells);
			oMytable.rows[rowIndex].cells[2].innerHTML = oNum;
			oMytable.rows[rowIndex].cells[3].innerHTML = oUser;
			oMytable.rows[rowIndex].cells[4].innerHTML = oColl;
			oMytable.rows[rowIndex].cells[5].innerHTML = oMaj;
			oMytable.rows[rowIndex].cells[6].innerHTML = oGrade;
			oMytable.rows[rowIndex].cells[7].innerHTML = oClass;
			oMytable.rows[rowIndex].cells[8].innerHTML = oAge;
			closemod();
			}
		}
		
		function testChinese(str)
		{
			var re = /[^\u4e00-\u9fa5]/;
			if(re.test(str)){
				return false;
			}else{
				return true;
			}
		}
		
		function testNum(str)
		{
			var pattern = new RegExp("[0-9]+");
			if(pattern.test(str)){
				return true;
			}else{
				return false;
			}
		}
		
		function testBlank(str)
		{
			if(str.length == 0){
				return true;
			}else{
				return false;
			}
		}
		
		function checkinput()
		{
			var icon = 0;
			var oNum = document.getElementById("num").value;
			var oUser = document.getElementById("username").value;
			var oColl = document.getElementById("college").value;
			var oMaj = document.getElementById("major").value;
			var oGrade = document.getElementById("grade").value;
			var oClass = document.getElementById("class").value;
			var oAge = document.getElementById("age").value;
			if(testBlank(oNum)){
				document.getElementById("num").className = "addblock-item-blank-wrong";
				document.getElementById("err1").innerHTML = "不能为空！";
				icon++;
			}
			else if(!testNum(oNum)||oNum.length!=11){
				document.getElementById("num").className = "addblock-item-blank-wrong";
				document.getElementById("err1").innerHTML = "内容有误！";
				icon++;
			}
			if(testBlank(oUser)){
				document.getElementById("username").className = "addblock-item-blank-wrong";
				document.getElementById("err2").innerHTML = "不能为空！";
				icon++;
			}
			else if(!testChinese(oUser)||oUser.length<2){
				document.getElementById("username").className = "addblock-item-blank-wrong";
				document.getElementById("err2").innerHTML = "内容有误！";
				icon++;
			}
			if(testBlank(oColl)){
				document.getElementById("college").className = "addblock-item-blank-wrong";
				document.getElementById("err3").innerHTML = "不能为空！";
				icon++;
			}
			else if(!testChinese(oColl)||oColl.length<3){
				document.getElementById("college").className = "addblock-item-blank-wrong";
				document.getElementById("err3").innerHTML = "内容有误！";
				icon++;
			}
			if(testBlank(oMaj)){
				document.getElementById("major").className = "addblock-item-blank-wrong";
				document.getElementById("err4").innerHTML = "不能为空！";
				icon++;
			}
			else if(!testChinese(oMaj)||oMaj.length<2){
				document.getElementById("major").className = "addblock-item-blank-wrong";
				document.getElementById("err4").innerHTML = "内容有误！";
				icon++;
			}
			if(testBlank(oGrade)){
				document.getElementById("grade").className = "addblock-item-blank-wrong";
				document.getElementById("err5").innerHTML = "不能为空！";
				icon++;
			}
			else if(!testNum(oGrade)||oGrade.length!=4){
				document.getElementById("grade").className = "addblock-item-blank-wrong";
				document.getElementById("err5").innerHTML = "内容有误！";
				icon++;
			}
			if(testBlank(oClass)){
				document.getElementById("class").className = "addblock-item-blank-wrong";
				document.getElementById("err6").innerHTML = "不能为空！";
				icon++;
			}
			else if(!testNum(oClass)||oClass.length>2){
				document.getElementById("class").className = "addblock-item-blank-wrong";
				document.getElementById("err6").innerHTML = "内容有误！";
				icon++;
			}
			if(testBlank(oAge)){
				document.getElementById("age").className = "addblock-item-blank-wrong";
				document.getElementById("err7").innerHTML = "不能为空！";
				icon++;
			}
			else if(!testNum(oAge)||oAge<0||oAge>100){
				document.getElementById("age").className = "addblock-item-blank-wrong";
				document.getElementById("err7").innerHTML = "内容有误！";
				icon++;
			}
			if(icon == 0)
				return false;
			else
				return true;
		}
		
		function checkmodify()
		{
			var icon = 0;
			var oNum = document.getElementById("mod-num").value;
			var oUser = document.getElementById("mod-username").value;
			var oColl = document.getElementById("mod-college").value;
			var oMaj = document.getElementById("mod-major").value;
			var oGrade = document.getElementById("mod-grade").value;
			var oClass = document.getElementById("mod-class").value;
			var oAge = document.getElementById("mod-age").value;
			if(!testNum(oNum)||testBlank(oNum)||oNum.length!=11){
				document.getElementById("mod-num").className = "addblock-item-blank-wrong";
				icon++;
			}
			if(!testChinese(oUser)||testBlank(oUser)||oUser.length<2){
				document.getElementById("mod-username").className = "addblock-item-blank-wrong";
				icon++;
			}
			if(!testChinese(oColl)||testBlank(oColl)||oColl.length<3){
				document.getElementById("mod-college").className = "addblock-item-blank-wrong";
				icon++;
			}
			if(!testChinese(oMaj)||testBlank(oMaj)||oMaj.length<2){
				document.getElementById("mod-major").className = "addblock-item-blank-wrong";
				icon++;
			}
			if(!testNum(oGrade)||testBlank(oGrade)||oGrade.length!=4){
				document.getElementById("mod-grade").className = "addblock-item-blank-wrong";
				icon++;
			}
			if(!testNum(oClass)||testBlank(oClass)||oClass.length>2){
				document.getElementById("mod-class").className = "addblock-item-blank-wrong";
				icon++;
			}
			if(!testNum(oAge)||testBlank(oAge)||oAge<0||oAge>100){
				document.getElementById("mod-age").className = "addblock-item-blank-wrong";
				icon++;
			}
			if(icon == 0)
				return false;
			else
				return true;
		}
		
		function showitem(){
			var oMytable = document.getElementById("mytable");
			var limit;
			var i = (page-1)*pageItem+1;
			if(n > page*pageItem)
				limit = page*pageItem;
			else
				limit = n;
			for(var j=1;j <= n;j++)
			{
				if(j%2 == 0){
				oMytable.rows[j].className = "content-style-down-hidden";
				}else{
				oMytable.rows[j].className = "content-style-up-hidden";
				}	
			}
			for(;i<=limit;i++)
			{
				if(i%2 == 0){
				oMytable.rows[i].className = "content-style-down";
				}else{
				oMytable.rows[i].className = "content-style-up";
				}
			}
		}
		
		function nextpage()
		{
			if(page*pageItem >= n){
				alert("已经是尾页了！");
			}else{
				page++;
				showitem();
				updateNumber();
			}
		}
		
		function boforepage()
		{	
			if(page == 1){
				alert("已经是首页了！");
			}else{
				page--;
				showitem();
				updateNumber();
			}
		}
		
		function rearrangeItem()
		{
			var oMytable = document.getElementById("mytable");
			for(var i = 1; i <= n; i++)
			{
				oMytable.rows[i].cells[1].innerHTML = i;
				if(i%2 == 0){
				oMytable.rows[i].className = "content-style-down";
				}else{
				oMytable.rows[i].className = "content-style-up";
				}
			}
		}
		
		function updateNumber(){
			document.getElementById("info").innerHTML = "第"+page+"页,共"+n+"条,(每页显示";
		}
		
		function turnPage()
		{
			var num = document.getElementById("jump").value;
			if(num <= 0||num >= ((n/pageItem)+1))
				alert("超出页码范围！");
			else{
				page = num;
				showitem();
			}
			document.getElementById("jump").value = "";
		}
		
		function turnFirstPage()
		{
			page = 1;
			showitem();
			updateNumber();
		}
		
		function turnFinalPage()
		{
			page = ((n-n%pageItem)/pageItem)+1;
			showitem();
			updateNumber();
		}
		
		function test(frm,event){
			var event = window.event?window.event:event;
			if(event.keyCode==13){
				addList();
			}
		}
		
		document.onkeydown = cdk;
		function cdk(){
			if(event.keyCode == 13){
				addList();
			}
		}
		
		function setTime()
		{
			pageItem = document.getElementById("pageitem").value;
			if(pageItem != pageItemO)
			{
				showitem();
				pageItemO = pageItem;
			}
		}
		
		function init(){
			t = setInterval(function(){setTime()},1000);
		}