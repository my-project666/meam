import * as React from 'react';
import './css/exam.css';
import {inject,observer} from 'mobx-react';
import cons from 'src/router/cons';
interface Props {
    questionexam:any,
    match:any
}
@observer
@inject('questionexam')
class Exam extends React.Component<Props> {
    state={
        list:[]
    }
    render() {
        const {list} = this.state;
        console.log(list)
        return (
            <div className="exam_wrap">
                 <h2 className="exam_title">试卷详情</h2>
                 <div className="exam_content">
                       <div className="exam_left">
                               111111111
                       </div>
                       <div className="exam_right">

                       </div> 
                 </div>
            </div>
        )
    }
    async componentDidMount(){
        let id = this.props.match.params.id.slice(3)
        const result = await this.props.questionexam.questionExam(id)
        this.setState({
            list:result.data.questions
        })
    }
}


export default Exam;