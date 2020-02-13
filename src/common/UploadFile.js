import { Component } from "react";

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"附件上传",
            title:"title",
            value:"value",
            placeholder:"请选择上传文件",
            paramName:"接口提供参数",
            errorList:"",
            loading:false,
            uploadProgress:0,
            url:""
        }
        this.upload = this.upload.bind(this);
    }
    upload(event) {
        event.preventDefault();
        this.setState({
            loading:true,
            uploadProgress:0
        })
        var form = document.getElementById("file_update");
        let formData = new FormData(form);
        var that = this;
        $.ajax({
            url: this.state.url,
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            xhr: function() {//check if upload property exists
                var myXhr = $.ajaxSetting.xhr();
                if(myXhr.upload) {
                    myXhr.upload.addEventListener('progress', function(e) {
                        var loaded = e.loaded;//已经上传大小
                        var tot = e.total;//附件总大小
                        var per = Math.floor(100*loaded/tot);//已经上传的百分比
                        that.setState({
                            uploadProgress:per===100?99:per
                        })
                    },false); // for handling the progress of the upload
                }
                return myXhr;
            },
            success:function(data) {},
            error:function(err) {}
        })
    }
    //上传附件
    uploadFile(event) {
        this.upload(event, (data) => {
            //success逻辑处理
        }, (err) => {
            //error逻辑处理
        })
    }

    render() {
        return(
            <div className="uploadfile">
                <span>{this.state.name}</span>
                <form id="file_update" onSubmit={this.uploadFile.bind(this)}>
                    <input type="text" 
                        title={this.state.title}
                        value={this.state.value}
                        readOnly="readonly"
                        placeholder={this.state.placeholder}
                        className="fileName"
                    />
                    <div>
                        <input type="file" 
                            ref={(input) => {this.input=input}}
                            name={this.state.paramName}
                            onClick={this.fileClick.bind(this)}
                            onChange={this.fileChange.bind(this)}
                            className="changefile"
                        />
                        <input type="button" value="选择文件" className="fileButton" onChange={this.fileChange.bind(this)} />
                    </div>
                    <div>
                        <input type="submit" value="上传" className="fileButton" />
                    </div>
                    {/* {
                        this.state.errorList.length > 0 &&
                        <p className="text-error">
                            {
                                this.state.errorList.map((val,key) => {
                                    return (
                                        <span key={"key"+key}>{val}</span>
                                    )
                                })
                            }
                        </p>
                    } */}
                </form>
            </div>
        )
    }
}

export default UploadFile;