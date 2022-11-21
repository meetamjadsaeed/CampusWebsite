import React from 'react'
import "antd/dist/antd.css";


import { Table } from 'antd';
const columns = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg'],
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];

const Profile = () => {
  return (
    <>
    
<div>Header</div>

<div className='container'>

<div class="panel panel-mask profileheader border-default-light">
  <div class="coverprofile bg-cover" ></div>
  <div class="text-center"><img alt='' src='https://i.tribune.com.pk/media/images/1830234-emmadirfani-1540029568/1830234-emmadirfani-1540029568.png'
      class='avatar avatar-150 photo' height='150' width='150' /></div>
  <div class="panel-body">
    <div class="text-center">
      <div class="dropdown inblock">
        <h1 class="font-3x margtop-none inblock">Prof. Dr. M. Abdul Rehman Soomrani</h1>
      </div>
      
<h2>Biography</h2>
      <p>Dr. Rehman has experience with a wide range of database and semantic web technologies through the academic and research projects. His areas of interests are: Scientific Workflows, Scientific (machine generated) Data Management, Ontology based data integration, and Data transformation as well as transportation in scientific applications. Moreover, his interests also include the dataflow and data transformation languages. </p>
      <p>
      Contact Member: </p>
<p>E-mail : rehman@iba-suk.edu.pk</p>
<p>Office Extension : 4061

      </p>

<h2>Qualifications</h2>
<Table columns={columns} dataSource={data} />

    </div>
  </div>
</div>

</div>


<div>Footer</div>

{/* image
about 
timilnine */}


    
    </>
  )
}

export default Profile