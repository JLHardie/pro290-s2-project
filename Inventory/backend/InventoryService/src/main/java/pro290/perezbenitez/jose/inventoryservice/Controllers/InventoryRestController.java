/**
 * @author jperezbenitez
 * @createdOn 5/2/2024 at 10:24 AM
 * @projectName InventoryService
 * @packageName pro290.perezbenitez.jose.inventoryservice;
 */
package pro290.perezbenitez.jose.inventoryservice.Controllers;

import jakarta.servlet.http.HttpServletResponse;
//import jakarta.ws.rs.PUT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pro290.perezbenitez.jose.inventoryservice.Models.ErrorMessage;
import pro290.perezbenitez.jose.inventoryservice.Models.Item;
import pro290.perezbenitez.jose.inventoryservice.Models.ItemSuccessDTO;
import pro290.perezbenitez.jose.inventoryservice.Repositories.ItemRepository;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/")
public class InventoryRestController {

    @Autowired
    private ItemRepository itemRepo;

    @GetMapping(path = "/test")
    @ResponseStatus(HttpStatus.I_AM_A_TEAPOT)
    public String test(){
        return "This is a test";
    }

    @PostMapping(path = "")
    @ResponseStatus(HttpStatus.CREATED)
    public ItemSuccessDTO CreateAnItem(@RequestBody Item item){
        UUID guid = UUID.randomUUID();
        item.setItemId(guid);
        itemRepo.save(item);
        return new ItemSuccessDTO(true, "Item Created Successfully", guid);
    }

    @GetMapping(path = "/{itemId}")
    public Object GetItemById(HttpServletResponse resp, @PathVariable UUID itemId){
        Item item = itemRepo.findById(itemId).orElse(null);
        if (item == null) {
            resp.setStatus(404);
            return new ErrorMessage(false, "No item found with specified id.");
        } else {
            resp.setStatus(200);
        }
        return item;
    }

    @GetMapping(path = "")
    public List<Item> GetAllItems(){
        return itemRepo.findAll();
    }

    @PutMapping(path = "/{itemId}")
    public ItemSuccessDTO UpdateItemById(@PathVariable UUID itemId, @RequestBody Item item) {
        item.setItemId(itemId);
        itemRepo.save(item);
        return new ItemSuccessDTO(true, "Item Successfully Updated",  itemId);
    }

    @DeleteMapping(path = "/{itemId}")
    public Object DeleteItemById(HttpServletResponse resp, @PathVariable UUID itemId){
        if (itemRepo.existsById(itemId)){
            itemRepo.deleteById(itemId);
            resp.setStatus(204);
            return null;
        } else {
            resp.setStatus(404);
            return new ErrorMessage(false, "No item found with that id.");
        }
    }

    @PostMapping(path = "/addmany")
    @ResponseStatus(HttpStatus.CREATED)
    public void AddManyItems(@RequestBody List<Item> items){
        for (Item item : items) {
            item.setItemId(UUID.randomUUID());
            itemRepo.save(item);
        }
    }
}

