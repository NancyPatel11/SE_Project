import './ProjectHome.css'
import bg1 from '../assets/bg-1.jpg'
import bg2 from '../assets/bg-2.jpg'
import bg3 from '../assets/bg-3.jpg'
import mainbg from '../assets/main-bg.jpg'
import Pie from './myPieChart'


function ProjectHome() {
    return (
        <div className="container px-3" style={{ backgroundImage: `url(${mainbg})`, backgroundSize: "cover" }}>
            <div className="row">
                <div className="col-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod magni dignissimos molestiae hic eius autem, fugiat facilis sunt sapiente suscipit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At culpa numquam rem nulla fuga labore quo enim aliquid unde sunt similique, possimus ex excepturi quos cupiditate debitis doloribus minima, nihil et adipisci doloremque rerum. Doloremque nisi ipsum minima quas, modi laborum quisquam, beatae suscipit quo qui aliquam. Maiores aut iste voluptatibus, placeat mollitia velit provident ullam veritatis quae quidem voluptatum itaque vel, fuga quasi nesciunt porro asperiores? Dolore ratione repudiandae doloribus distinctio voluptate, temporibus perspiciatis non dolorum! Repellat quia, maxime temporibus ipsa dolorum maiores quo voluptatibus doloribus accusantium, quidem recusandae obcaecati officiis facere corporis animi delectus molestiae vero sed! Architecto.</div>
                <div className="col-9">
                    <div className="container"></div>
                    <div className="row">
                        <div className="col-12 my-3 py-3" style={{ color: "#fff", backgroundColor: "#304D6D", borderRadius: "15px" }}>
                            <h2>Project Description</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore maxime quisquam sapiente ratione nemo aliquid numquam tempore repellendus voluptatum!</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-6" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center", backgroundSize: "cover", borderRadius: "15px" }}>
                            <h3 className='mx-3 my-3' style={{ color: "#fff", fontWeight: "700", fontSize: "2.5rem" }}>Total Budget</h3>
                            <div className="pie">
                            <Pie />
                            </div>
                            


                        </div>
                        <div className="col-md-6 py-2" style={{ backgroundColor: "#B3C8E4", borderRadius: "15px" }}>
                            <h3 className="text-center py-2" style={{ color: "#fff", backgroundColor: "#295CAA", borderRadius: "15px" }}>Employees</h3>
                            <div className="overflow-auto scroll" style={{ maxHeight: "300px" }}>
                                <ol className="list-group list-group-numbered" style={{ maxWidth: "100%", }}>
                                    <li className="list-group-item">Employee 1</li>
                                    <li className="list-group-item">Employee 2</li>
                                    <li className="list-group-item">Employee 3</li>
                                    <li className="list-group-item">Employee 4</li>
                                    <li className="list-group-item">Employee 5</li>
                                    <li className="list-group-item">Employee 6</li>
                                    <li className="list-group-item">Employee 7</li>
                                    <li className="list-group-item">Employee 8</li>
                                    <li className="list-group-item">Employee 9</li>
                                    <li className="list-group-item">Employee 10</li>
                                </ol>
                            </div>
                        </div>

                        <div className="w-100 my-2"></div>
                        <div className="col-md-6" style={{ backgroundImage: `url(${bg2})`, backgroundPosition: "center", backgroundSize: "cover", borderRadius: "15px" }}>
                            Box3
                        </div>
                        <div className="col-md-6" style={{ backgroundImage: `url(${bg3})`, backgroundPosition: "center", backgroundSize: "cover", borderRadius: "15px" }}>
                            <div className="container my-3">
                                <div className="row justify-content-md-center">
                                    <div className="col-9 my-3" style={{ color: "#fff", backgroundColor: "#184FA3", borderRadius: "30px" }}>
                                        <h3 className='mx-3 my-1'>Approved Expenses</h3>
                                        <p className='mx-3' style={{ fontSize: "30px", fontWeight: "500" }}>2</p>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-9 my-3" style={{ color: "#000", backgroundColor: "#C7C7C7", borderRadius: "30px" }}>
                                        <h3 className='mx-3 my-1'>Pending Approval</h3>
                                        <p className='mx-3' style={{ fontSize: "30px", fontWeight: "500" }}>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectHome;