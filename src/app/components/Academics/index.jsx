import "./style.css"
import Image from "next/image"

const index = () => {
  return (
    <section className="academics-section">
        <h1>Academic Experience</h1>
        <div className="cont">
            <div className='text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta itaque in velit nulla nemo consectetur quam asperiores maxime, magnam ipsum hic dolorum libero deserunt labore ullam dignissimos ex dolores! Id, impedit necessitatibus omnis enim odit excepturi suscipit error facilis dignissimos amet vitae consequuntur, commodi aut incidunt iusto eius et asperiores debitis perferendis nisi, magni delectus dolores quibusdam. Aperiam illum, fuga asperiores architecto consectetur facere unde, hic voluptatum dolor tenetur officiis sequi? Saepe quia fugiat molestias voluptas, natus laudantium dolore commodi quo alias culpa ducimus fuga dignissimos unde nulla a libero, consequuntur atque aspernatur labore ratione eligendi quisquam ea quidem.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quis odit ad aliquam dolorem! Omnis voluptas excepturi error, sed laborum aspernatur debitis repellendus vel repellat facilis accusantium velit ullam mollitia praesentium quaerat ducimus laudantium totam libero nulla dolorem earum! Odio, quaerat cumque debitis tenetur fugiat eaque vitae quos. Sint, laboriosam!</p> 
            </div>
            <ul class="list-component">
                <li class="__item">
                    <div class="card-component">
                        <div>
                            <h2 class="__year">Passing Year: 2022</h2>
                            <h1 class="__title">Jadavpur University</h1>
                            <p class="__text">Ph.D</p>
                            <p className="__text">Engineering</p>
                        </div>
                        <Image src="/ju_logo.png" width={120} height={120} alt="Image" className='card-img' />
                    </div>
                </li>
                <li class="__item">
                    <div class="card-component">
                        <div>
                            <h2 class="__year">Passing Year: 2014</h2>
                            <h1 class="__title">Jadavpur University</h1>
                            <p class="__text">M. Tech</p>
                            <p className="__text">I.T(Courseware Engineering)</p>
                        </div>
                        <Image src="/ju_logo.png" width={120} height={120} alt="Image" className='card-img' />
                    </div>
                </li>
                <li class="__item">
                    <div class="card-component">
                        <div>
                            <h2 class="__year">Passing Year: 2012</h2>
                            <h1 class="__title">Govt. College of Engg. & Textile Technology, Serampore</h1>
                            <p class="__text">B. Tech</p>
                            <p className="__text">Information Technology</p>
                        </div>
                        <Image src="/gcetts_logo.png" width={120} height={120} alt="Image" className='card-img' />
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default index