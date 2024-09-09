import {
  // Description,
  Dialog,
  DialogPanel,
  // DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 grid overflow-x-hidden overflow-y-auto place-items-center w-dvw bg-black/50">
          <DialogPanel>
            <div className="max-w-full w-dvw">
              <div className="max-w-[1312px] mx-auto min-h-screen">
                <div className="fixed top-0 right-0 font-bold text-purple-500 bg-yellow-500 end w-fit">Deactivate account</div>
                <div className="text-green-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum culpa delectus fugiat nihil ullam, rerum numquam recusandae aperiam aliquam in neque quaerat cum vero? Maiores quam corrupti, vero quasi veniam inventore temporibus. Error aperiam voluptates sunt facere inventore commodi iure fugit quos nulla quam? Quo at pariatur non labore rem aliquam quod temporibus quasi iure magni, tenetur beatae assumenda voluptatibus illo consequatur maxime reprehenderit, eius itaque minus necessitatibus? Quisquam, quidem. Consequatur, quia eius odit voluptas enim voluptates iste reiciendis, illo delectus doloribus natus ipsa modi, perspiciatis quisquam. Nesciunt recusandae officia veritatis aperiam cum sit laudantium quo? Eius eaque dolorum tempore eos sit consequuntur nisi, temporibus vitae aliquam, vel amet, illo autem! Tempora incidunt vel fugiat quo illo voluptatum, temporibus sit provident inventore eveniet fuga numquam, sapiente iste earum ipsum nesciunt? Aperiam, neque. Ipsam eaque fuga nulla saepe ut maxime sapiente dicta debitis, enim similique libero in illo veniam error voluptate accusamus temporibus, hic dolorum illum cumque voluptas ducimus? Est, quam consequatur vitae voluptatem nemo, exercitationem qui nesciunt delectus mollitia quibusdam unde commodi, debitis officia odio! Labore accusamus nesciunt a incidunt assumenda! Voluptas ex quasi reiciendis odio, veritatis hic voluptate adipisci quas? Facilis consequatur ad, exercitationem velit omnis odio ipsum et ab vitae mollitia rem porro rerum quis soluta ullam hic eos libero. Quod tempora expedita ut soluta! Alias autem id facere ducimus dolor temporibus obcaecati reiciendis! Quae aut accusantium iste ullam cupiditate quaerat non rem placeat tenetur? Ullam optio eaque dicta ipsam velit hic. Ex, accusantium accusamus! Mollitia sequi culpa, deleniti ut atque possimus impedit corporis error aut illum alias? Reprehenderit facilis modi enim assumenda rerum sed nostrum quia voluptas. Aspernatur voluptatem voluptas dicta porro, suscipit quasi minima perferendis, minus rem libero, sit illum error. Autem totam dignissimos sed cupiditate debitis fugiat ab quas fuga placeat, temporibus, error eveniet explicabo optio id velit nihil beatae molestiae! Ullam, dolorem eius officiis vitae aliquid asperiores tenetur animi laudantium. Aperiam deserunt quo voluptates voluptas totam iusto consectetur, sunt ex quam cupiditate alias tempora praesentium! Doloribus necessitatibus alias ut culpa. Repellendus inventore sunt perferendis ut ex? Recusandae architecto, asperiores fugiat nam eius quos cumque unde ut impedit autem blanditiis ipsam inventore eaque nostrum. Voluptates praesentium similique ratione deserunt nemo? Officiis tenetur fuga, porro vero delectus voluptatem vel dolores rem in doloribus enim! Fuga, velit atque? Corrupti accusantium labore sint reiciendis laborum, suscipit recusandae dignissimos ipsam fugit. Minima ratione modi suscipit. Enim cum aliquid, pariatur ipsam impedit, ex voluptate sit numquam eum, ab minus excepturi sequi debitis velit vel ea sint beatae veniam perferendis consectetur minima laborum porro cumque eius? Sequi ducimus eum eius possimus maxime, ipsa modi, ratione suscipit neque impedit cumque temporibus quibusdam! Illo animi hic neque qui architecto unde saepe totam explicabo libero voluptates fugit recusandae, quisquam fuga, consequatur, inventore vero distinctio esse rerum! Minus in molestiae incidunt natus optio sapiente autem id voluptates odio. Facere repellendus quasi suscipit reiciendis recusandae ratione laboriosam fugiat quia laudantium debitis, amet, voluptatem nihil corporis, aliquid inventore officia sint dicta quo et ducimus exercitationem earum. Quaerat hic maxime labore officia impedit, a nesciunt libero voluptatum accusamus neque, incidunt soluta? Odit ad, omnis tenetur saepe fugiat vero architecto reprehenderit ratione laudantium tempora, rem eligendi distinctio dicta minima. Ut asperiores corrupti, cupiditate blanditiis tempora porro voluptatibus nesciunt dicta laudantium dolor nemo ipsam iusto quo ad? Adipisci hic consequatur, cumque mollitia eius ipsam quam, id fuga quos nam vel. Excepturi quisquam maxime dolorum blanditiis. Temporibus quo magnam eaque veritatis voluptate dolores velit natus sed odit sapiente ad, impedit doloremque voluptatum cupiditate et quaerat quibusdam unde nesciunt accusantium neque cumque facilis quod. Facilis laboriosam tenetur quasi temporibus voluptate, eligendi hic perferendis. Veritatis doloribus eius optio aspernatur recusandae dolore nesciunt pariatur! Sunt, dicta laboriosam non illum, aut unde eum earum voluptas, facilis laborum corrupti. Sequi fugit ab consequatur beatae veritatis consectetur necessitatibus aut quisquam! Inventore facere maiores saepe dolorem consequuntur, nam aliquid eum! Fugiat dolorem tempora quia qui expedita pariatur modi totam a perspiciatis laboriosam molestiae dignissimos est amet corporis, reiciendis dolores asperiores saepe nulla ipsa aut quod quidem. Quaerat atque amet aspernatur sapiente! Magnam placeat ea veniam dicta. Vel velit deleniti beatae aperiam consectetur, soluta explicabo nihil earum ratione saepe porro quis consequatur culpa odit, iusto non expedita in? Eligendi architecto voluptatem accusantium corporis laborum amet officia labore, repudiandae perferendis? Iusto quaerat provident sint natus eos dicta, ut beatae est, assumenda molestias earum in excepturi modi fuga rem architecto dignissimos. Eum numquam sapiente natus incidunt velit dolor expedita alias nisi cumque necessitatibus vitae dolorum sit eos debitis maxime tempore eligendi voluptates aspernatur, odit nemo assumenda! Quo repudiandae at corrupti voluptatibus minus dicta ex molestiae fuga. Ex quibusdam qui, tempore odit quia vel incidunt placeat quae dolor, maiores cumque nihil velit ipsa quos? Ipsam iste nam labore nihil eveniet perferendis maiores alias est, quaerat quo quos, nostrum ipsa! Id sapiente harum earum illo mollitia non quos quis sequi officia, saepe corrupti facere tempora molestiae nobis labore distinctio? Molestias, voluptatum. Velit eveniet, libero, pariatur nihil corporis explicabo eaque alias, doloremque deleniti soluta necessitatibus eum officiis autem consequuntur. Distinctio, accusantium id. Sed eligendi neque facilis molestias iure delectus nobis omnis sapiente hic necessitatibus mollitia et, ipsam suscipit obcaecati doloremque totam est ipsum deleniti sunt rem voluptate quas id enim porro! Velit, voluptatibus quos temporibus repudiandae corrupti veniam optio doloremque provident soluta beatae ex sit et laboriosam, consequatur at tempora inventore animi laborum. At, reprehenderit. Ea dignissimos aperiam ex mollitia excepturi, voluptatem ipsum animi hic fugiat ipsa provident soluta totam, perspiciatis modi vel expedita laborum a beatae omnis asperiores blanditiis praesentium esse aliquid? Reprehenderit inventore ducimus suscipit optio ipsa nesciunt corporis deleniti labore! Harum veniam labore ipsum laborum nobis ipsam sunt, iste necessitatibus? Ipsa pariatur ab, dolorum illum ipsum voluptates quam doloremque blanditiis aliquid, quasi laudantium beatae illo eos! Obcaecati ratione minus excepturi. Expedita voluptate doloribus est porro quia temporibus vero incidunt debitis recusandae, minima quasi sunt unde officia placeat veniam sed ut saepe architecto fuga obcaecati et possimus officiis illum numquam? Ratione sed quam officiis, saepe eos sunt. Nostrum consequatur expedita facere voluptatem!</div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default Example;
